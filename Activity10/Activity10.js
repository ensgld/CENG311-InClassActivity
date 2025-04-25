$(document).ready(function () {
    // Birthday i�in datepicker
    $("#birthday").datepicker();

    // City i�in autocomplete
    var cities = [
        "Charlotte", "New York", "Washington DC", "Ankara", "Istanbul", "Izmir"
    ];
    $("#city").autocomplete({
        source: cities
    });

    // Programming Language i�in autocomplete
    var languages = [
        "JavaScript", "Python", "Java", "C++", "C#", "Ruby", "Go", "PHP", "Swift"
    ];
    $("#language").autocomplete({
        source: languages
    });
});
