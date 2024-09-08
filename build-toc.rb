require 'redcarpet'
require 'json'

$toc = []
$current_stack = [$toc]
$chapter = ""
class ToC < Redcarpet::Render::Base
  def header(text, header_level)
    return nil if text.include? "title:"
    return nil if text.include? "Table Of Contents"
    return nil if text.include? "Summary"

    id = text.gsub(" ", "-").gsub(/[^\s\w-]/, "").downcase
    entry = { label: text, id: "/#{$chapter}##{id}", children: [] }

    if header_level == 1
      $current_stack[0] << entry
      $current_stack = [$toc, entry[:children]]
    else
      parent = $current_stack[header_level - 2]
      parent.last[:children] << entry if parent && parent.any?
      $current_stack[header_level - 1] = parent.last[:children]
    end
    return nil
  end
end

def create_chapter_toc(chapter)
  content = File.read("#{chapter}.md")
  markdown = Redcarpet::Markdown.new(ToC)
  markdown.render(content)
end

chapters = [
  "character-creation",
  "classes",
  "arcane-traditions",
  "rules",
  "combat",
  "equipment",
  "feats",
  "spells",
  "examples",
  "running-the-game"
]

chapters.each do |chapter|
  $chapter = chapter
  create_chapter_toc(chapter)
end

File.open("_data/toc.json", 'w') { |file| file.write($toc.to_json) }

$toc.each do |chapter|
  file_name = chapter[:label].gsub(" ", "-").gsub(/[^\s\w-]/, "").downcase
  File.open("_data/#{file_name}.json", 'w') { |file| file.write(chapter[:children].to_json) }
end
