var s1Timeout,s2Timeout;function s1Loop(){s1Timeout=setTimeout((function(){var e=$(".s1-phone-font-wrapper").children(".s1-phone-theme-item-active:first").next();e.length?e.click():$(".s1-phone-font-wrapper > .s1-phone-theme-item:first").click();var t=$(".s1-phone-theme-wrapper").children(".s1-phone-theme-item-active:first").next();t.length?t.click():$(".s1-phone-theme-wrapper > .s1-phone-theme-item:first").click()}),3e3)}function s2Loop(){s2Timeout=setTimeout((function(){var e=$(".s2-tab-menu").children(".w--current:first").next();e.length?e.click():$(".s2-tab:first").click()}),5e3)}$((function(){s1Loop(),s2Loop()})),$(".s1-phone-font-wrapper > .s1-phone-theme-item").click((function(){$(".s1-phone-content").css("font-family",'"'+$(this).find(".s1-phone-font-title").text()+'", sans-serif')})),$(".s1-phone-font-wrapper, .s1-phone-theme-wrapper").children().click((function(){$(this).parent().find(".s1-phone-theme-item").removeClass("s1-phone-theme-item-active").end().end().addClass("s1-phone-theme-item-active"),clearTimeout(s1Timeout),s1Loop()})),$(".s2-tab").click((function(){clearTimeout(s2Timeout),s2Loop()}));
