require 'date'

module Jekyll
  class GitDate < Jekyll::Generator
    def generate(site)
      site.pages.each do |page|
        date = Time.at(`git log -1 --format="%at" -- #{page.path}`.to_i).to_datetime
        page.data['git_date'] = date.strftime('%B %e, %Y')
      end
    end
  end
end
