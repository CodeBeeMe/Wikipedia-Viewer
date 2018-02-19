/* !Date:12.06.2017 Copyright ©2017-2018 JavaScript Code by Cătălin Anghel-Ursu @Madness2aMaze (https://codepen.io/Madness2aMaze)

- All Rights Reserved!

MIT License

Copyright (c) 2017-2018 Cătălin Anghel-Ursu (https://github.com/Madness2aMaze/Wikipedia-Viewer)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

$(document).ready(function() {
  $("#search-field").focus();

  $("#go").click(function() {
    var keyword = "";

    $("input")
      .keyup(function() {
      keyword = $(this).val();
    })
      .keyup();

    console.log(keyword);

    var mainUrl = "https://en.wikipedia.org/w/api.php";
    mainUrl += "?" + $.param({
      action: "opensearch",
      search: keyword,
      prop: "info",
      format: "json",
      limit: 10
    });

    $.ajax({
      url: mainUrl,
      dataType: "jsonp",
      success: function(data) {
        if(keyword === "") {
            alert("Please enter your query!")
            return;
          } 
        $(".results").addClass("res-after");
        $(".footer").removeClass("fixed-bottom");
        $(".main").removeClass("main").addClass("min");
        $(".list").removeClass("list").addClass("listed");
        $(".footer").removeClass("footer").addClass("footbar");
        //$("i").removeClass("fa fa-search").addClass("fa fa-times-circle");
        $(".search-box").removeClass("search-box").addClass("min-search-box");

        $("#T0").html(data[1][0]);
        $("#t0").html(data[2][0]);
        $("#L0").attr("href", data[3][0]);

        $("#T1").html(data[1][1]);
        $("#t1").html(data[2][1]);
        $("#L1").attr("href", data[3][1]);

        $("#T2").html(data[1][2]);
        $("#t2").html(data[2][2]);
        $("#L2").attr("href", data[3][2]);

        $("#T3").html(data[1][3]);
        $("#t3").html(data[2][3]);
        $("#L3").attr("href", data[3][3]);

        $("#T4").html(data[1][4]);
        $("#t4").html(data[2][4]);
        $("#L4").attr("href", data[3][4]);

        $("#T5").html(data[1][5]);
        $("#t5").html(data[2][5]);
        $("#L5").attr("href", data[3][5]);

        $("#T6").html(data[1][6]);
        $("#t6").html(data[2][6]);
        $("#L6").attr("href", data[3][6]);

        $("#T7").html(data[1][7]);
        $("#t7").html(data[2][7]);
        $("#L7").attr("href", data[3][7]);

        $("#T8").html(data[1][8]);
        $("#t8").html(data[2][8]);
        $("#L8").attr("href", data[3][8]);

        $("#T9").html(data[1][9]);
        $("#t9").html(data[2][9]);
        $("#L9").attr("href", data[3][9]);
        console.log(data);
      }
    });
  });

  $(document).keypress(function(event) {
    var keyword = "";

    if (event.which == 13) {
      $("input")
        .keyup(function() {
        keyword = $(this).val();
      })
        .keyup();

      console.log(keyword);

      var mainUrl = "https://en.wikipedia.org/w/api.php";
      mainUrl += "?" + $.param({
        action: "opensearch",
        search: keyword,
        prop: "info",
        format: "json",
        limit: 10
      });

      $.ajax({
        url: mainUrl,
        dataType: "jsonp",
        success: function(data) {
          if(keyword === "") {
            alert("Please enter your query!")
            return;
          } 
          $(".results").addClass("res-after");
          $(".footer").removeClass("fixed-bottom");
          $(".main").removeClass("main").addClass("min");
          $(".list").removeClass("list").addClass("listed");
          $(".footer").removeClass("footer").addClass("footbar");
          //$("i").removeClass("fa fa-search").addClass("fa fa-times-circle");
          $(".search-box").removeClass("search-box").addClass("min-search-box");

          $("#T0").html(data[1][0]);
          $("#t0").html(data[2][0]);
          $("#L0").attr("href", data[3][0]);

          $("#T1").html(data[1][1]);
          $("#t1").html(data[2][1]);
          $("#L1").attr("href", data[3][1]);

          $("#T2").html(data[1][2]);
          $("#t2").html(data[2][2]);
          $("#L2").attr("href", data[3][2]);

          $("#T3").html(data[1][3]);
          $("#t3").html(data[2][3]);
          $("#L3").attr("href", data[3][3]);

          $("#T4").html(data[1][4]);
          $("#t4").html(data[2][4]);
          $("#L4").attr("href", data[3][4]);

          $("#T5").html(data[1][5]);
          $("#t5").html(data[2][5]);
          $("#L5").attr("href", data[3][5]);

          $("#T6").html(data[1][6]);
          $("#t6").html(data[2][6]);
          $("#L6").attr("href", data[3][6]);

          $("#T7").html(data[1][7]);
          $("#t7").html(data[2][7]);
          $("#L7").attr("href", data[3][7]);

          $("#T8").html(data[1][8]);
          $("#t8").html(data[2][8]);
          $("#L8").attr("href", data[3][8]);

          $("#T9").html(data[1][9]);
          $("#t9").html(data[2][9]);
          $("#L9").attr("href", data[3][9]);

          console.log(data);
        }
      });
    }

    $("#go").click(function() {
      $("#search-field").val("");
      $("#search-field").focus();
    });
  });
});
