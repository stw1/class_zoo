"use strict";

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
            }var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, f, f.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({ 1: [function (require, module, exports) {

        // Hides the title/log after a set time
        setTimeout(function () {
            $('#title').fadeOut('fast');
        }, 1000); // time in milliseconds


        $(document).ready(function () {
            $('#parent_icon').click(function () {
                $('#login_page').hide();
                $('#parent_page').show();
                console.log("parent");
            });

            $('#student_icon').click(function () {
                $('#login_page').hide();
                $('#student_page').show();
                console.log("student");
            });

            $('#teacher_icon').click(function () {
                $('#login_page').hide();
                $('#teacher_page').show();
                console.log("teacher");
            });

            $('#back_icon').click(function () {
                $('#teacher_page').hide();
                $('#parent_page').hide();
                $('#student_page').hide();
                $('#login_page').show();
                console.log("back_icon");
            });

            $('#back_icon2').click(function () {
                $('#teacher_page').hide();
                $('#parent_page').hide();
                $('#student_page').hide();
                $('#login_page').show();
                console.log("back_icon");
            });

            $('#back_icon3').click(function () {
                $('#teacher_page').hide();
                $('#parent_page').hide();
                $('#student_page').hide();
                $('#login_page').show();
                console.log("back_icon");
            });

            console.log("Start of studentList");

            // Generate Profile/Projects from an external source.
            $.getJSON("js/students.json", function (data) {

                console.log("Inside json parsing");
                $.each(data.Student, function (key, value) {
                    var appendText = "<h4>" + value.student_name + "</h4>                              <strong>Score</strong> " + value.score;
                    console.log(appendText);
                    $('#studentList').append(appendText);
                });
            });
            console.log("End of studentList");
        });
    }, {}] }, {}, [1]);