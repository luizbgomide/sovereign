require 'redcarpet'
require 'json'

$toc = []
$current_stack = [$toc]
$chapter = ""
class ToC < Redcarpet::Render::Base
  def header(text, header_level)
    return nil if text.include? "title:"

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
  "delver-creation",
  "classes",
  "arcane-traditions",
  "rules",
  "combat",
  "equipment",
  "feats",
  "spells"
]

chapters.each do |chapter|
  $chapter = chapter
  create_chapter_toc(chapter)
end

File.open("_data/toc.json", 'w') { |file| file.write($toc.to_json) }
