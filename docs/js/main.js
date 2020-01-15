var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider

    // Main Menu 
    .when("/", {
        templateUrl : "pages/home.html"
    })
    .when("/tests", {
        templateUrl : "pages/tests.html"
    })
    .when("/aboutme", {
        templateUrl : "pages/aboutme.html"
    })
 
    /*
    # Personalidad
    Test de desconfianza
    Test de autoestima de Rosenberg
    Luscher
    SCID-II
    PDQ
    */
    .when("/test_mmpi_2", {
        templateUrl : "pages/test_mmpi_2.html"
    })
    .when("/test_16pf_5", {
        templateUrl : "pages/test_16pf_5.html"
    })

    /*
    # Psicopatología
    RORSCHACH
    TRO
    DEPRESION BECK
    STAI (ANSIEDAD)
    DEPRESION GOLDBERG
    TEST ANSIEDAD DE HAMILTON
    TEST DE BURNOUT O ESTRÉS LABORAL
    TEST DE PSICOPATÍA DE ROBERT HARE
    TEST DE ESTRÉS
    CAT
    */

    /*
    # Aptitudes
    TEST DE LA FAMILIA
    WONDERLIC
    WESTERN
    DOMINOS
    DFH
    */
    .when("/test_pbll", {
        templateUrl : "pages/test_pbll.html"
    })

    /*
    # Neuropsicológicos
    FIGURA DE REY
    */
    .when("/test_neuropsi", {
        templateUrl : "pages/test_neuropsi.html"
    })
    .when("/test_goodenough", {
        templateUrl : "pages/test_goodenough.html"
    })
    .when("/test_bender_bip", {
        templateUrl : "pages/test_bender_bip.html"
    })
    .when("/test_bender_koppitz", {
        templateUrl : "pages/test_bender_koppitz.html"
    })

    // Inteligencia
    /*
    WISC
    WAIS
    WISC IV (niños)
    WPPSI (niños)
    */

    // Interes/Vocación Profesional
    /*
    Test orientación vocacional
    TEST DE LIDERAZGO LBDQ XII
    TEST DE DISCIPLINA
    TEST DE COOPERACIÓN
    TEST DE ETICA
    TEST DE ASERTIVIDAD Y EMPATIA
    */

    /*

    // Interes/Vocación Profesional
    /*
    Test orientación vocacional
    TEST DE LIDERAZGO LBDQ XII
    TEST DE DISCIPLINA
    TEST DE COOPERACIÓN
    TEST DE ETICA
    TEST DE ASERTIVIDAD Y EMPATIA
    */

    // Desarrollo/Envejecimiento
    .when("/test_ace_r", {
        templateUrl : "pages/test_ace_r.html"
    })
    .when("/test_moca", {
        templateUrl : "pages/test_moca.html"
    })
    .when("/test_moca_b", {
        templateUrl : "pages/test_moca_b.html"
    })

    // Otros test
    .when("/test_beck", {
        templateUrl : "pages/test_beck.html"
    })
    .when("/test_faq", {
        templateUrl : "pages/test_faq.html"
    })
    .when("/test_pen_de_eysenck", {
        templateUrl : "pages/test_pen_de_eysenck.html"
    })
    .when("/test_yesavege", {
        templateUrl : "pages/test_yesavege.html"
    })

    // General
    .otherwise({
        templateUrl : "pages/under_construction.html"
    });

    
});