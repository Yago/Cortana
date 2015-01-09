class Cortanamarkdownrenderer < Redcarpet::Render::HTML
  def block_code(code, language)
    formatter = Rouge::Formatters::HTML.new(wrap: false)
    # ```[display width]_[show/toggle/hide code]
    # ```full_show
    # ```container_show
    # ```full_toggle
    # ```container_toggle
    # ```full_hide
    # ```container_hide
    if language and language.include?('_')
      r = rand(100000)
      lexer = Rouge::Lexer.find('html')
      '</div>
      <div class="codeExample">
        <div class="exampleOutput ' + has_container(language) + '" >
          <div class="exampleLabel">Preview</div>
          <div class="exampleContainer">
          ' + code + '
          </div>
        </div>
        <div class="codeBlock"  ng-show= ' + code_is_visible(language) + '>
          <div class="codeLabel" ng-show= ' + is_preview(language) + ' ng-click="codeBlock' + r.to_s + '= !codeBlock' + r.to_s + '">HTML</div>
          <div class="highlight" ng-show="' + code_is_toggle(language) + ' || codeBlock' + r.to_s + '">
            <pre>' + formatter.format(lexer.lex(code)) + '</pre>
          </div>
        </div>
      </div>
      <div class="cortana-content">'
    elsif language and language.include?('recipe')
      r = rand(100000)
      lexer = Rouge::Lexer.find('css')
      '</div>
        <div class="codeBlock recipe">
          <div class="codeLabel" ng-click="recipeBlock' + r.to_s + '= !recipeBlock' + r.to_s + '">Recipe</div>
          <div class="highlight" ng-show="recipeBlock' + r.to_s + '">
            <pre>' + formatter.format(lexer.lex(code)) + '</pre>
          </div>
        </div>
      <div class="cortana-content">'
    elsif language and language.include?('themed')
      r = rand(100000)
      lexer = Rouge::Lexer.find('html')
      '</div>
        <div class="codeExample">
          <div class="exampleOutput has-container" >
            <div class="exampleContainer">
              <div data-rh-layout="6 6">
                  <section>
                      <h3 class="exampleThemeTitle">Default</h3>
                      <div class="rh-card--layout" data-rh-theme="light">
                          ' + code + '
                      </div>
                  </section>
                  <section>
                      <h3 class="exampleThemeTitle">Dark Theme</h3>
                      <div class="rh-card--layout" data-rh-theme="dark">
                          ' + code + '
                      </div>
                  </section>
              </div>
            </div>
          </div>
        </div>
      <div class="cortana-content">'
    elsif language
      lexer = Rouge::Lexer.find_fancy('guess', code)
      formatter.format(lexer.lex(code))
    else
      code
    end
  end

  private
  def has_container(language)
    if language.include?('container')
      'has-container'
    else
      ''
    end
  end

  def is_preview(language)
    if language.include?('hide')
      'false'
    else
      'true'
    end
  end

  def code_is_visible(language)
    if language.include?('hide')
      'false'
    else
      'true'
    end
  end

  def code_is_toggle(language)
    if language.include?('toggle')
      'false'
    else
      'true'
    end
  end

end

