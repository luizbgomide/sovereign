require 'redcarpet'

class ToC < Redcarpet::Render::Base
  def header(text, header_level)
    if text.include? "title:"
      return nil
    end
    indent = Array.new((header_level - 1)*2, " ").join("")
    id = text.gsub(" ", "-").gsub(/[^\s\w-]/, "").downcase
    "#{indent}- [#{text}](/REPLACE_ME##{id})\n"
  end
end

def create_chapter_toc(chapter)
  content = File.read("#{chapter}.md")
  markdown = Redcarpet::Markdown.new(ToC)
  toc = markdown.render(content).gsub("REPLACE_ME", chapter)
  File.open("_includes/toc-#{chapter}.md", 'w') { |file| file.write(toc) }
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

master_toc = []

chapters.each do |chapter|
  create_chapter_toc(chapter)
  master_toc.push("{% include toc-#{chapter}.md %}")
end

File.open("_includes/toc.md", 'w') { |file| file.write(master_toc.join("\n")) }
