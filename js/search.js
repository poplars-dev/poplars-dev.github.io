jQuery(function() {
  // From http://davidwalsh.name/javascript-debounce-function
  function debounce(func, wait, immediate) {
      var timeout;
      return function() {
          var context = this, args = arguments;
          var later = function() {
              timeout = null;
              if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
      };
  };

  // Get the pre-compiled search index file so lunr.js can search it locally.
  window.data = $.getJSON('/search-index.json');

  // Wait for the data to load and add it to lunr
  window.data.then(function(loaded_data){
      window.idx = lunr.Index.load(loaded_data); 
      sort_results();
  });

  // Search as text is being input
  $("#search-input").keyup(debounce(function(){
      var $this=$(this);
      if($this.val()) {
          display_search_results(window.idx.search($this.val()));
      } else {
          clear_search_results();
      }
  },300));

  function sort_results() {
    var $wrapper = $('#customization-list');

    $wrapper.find('.customization-info').sort(function (a, b) {
        var order = 0;
        if(a.dataset.score && b.dataset.score) {
            order = +b.dataset.score - +a.dataset.score;
        } else {
            order = +b.dataset.order - +a.dataset.order;
        }

        if(!order) {
            if(a.id < b.id) {
                return -1;
            } else {
                return 1;
            }
        } 

        return order;
    })
    .appendTo( $wrapper );

  }

  function clear_search_results() {
      $(".customization-info").attr('data-score', 0);
      sort_results();
      $(".customization-info").show(); // show all the entries
      $("#search-results").empty(); // Clear any old results
  }

  function display_search_results(results) {
    var $search_results = $("#search-results");

    $(".customization-info").attr('data-score', 0);
    // Wait for data to load
    window.data.then(function(loaded_data) {

      // Are there any results?
      if (results.length) {

        $search_results.empty(); // Clear any old results

        // hide all the entries
        $(".customization-info").hide();

        // display the matches
        // TODO: reorder based on relevance
        results.forEach(function(result) {
          var elem = $("#" + result.ref);
          elem.attr('data-score', result.score);
          elem.show();
        });
        sort_results();

        $search_results.html("<p>Found " + results.length + " customizations.</p>");

      } else {
        // If there is a search term but there are no results, let the user know.
        $search_results.html('<p>No customizations found.</p>')
        // show all the entries
        $(".customization-info").show();
      }
    });
  }
});
