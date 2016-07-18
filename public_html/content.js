angular.module("conteudo", []);
angular.module("conteudo").controller("conteudoCtrl", function($scope) {
    $scope.app = "Conteudo";
    $scope.searchFilter = "";
    $scope.Exatas = [
        {nome: "Pedro", disciplina: "Calculo I", interesse: "Exatas", link: "#Pedro"},
        {nome: "Maria", disciplina: "Calculo II", interesse: "Exatas", link: "#Maria"},
        {nome: "Ana", disciplina: "Calculo Numérico", interesse: "Exatas", link: "#Ana"},
        {nome: "João", disciplina: "Engenharia de Software", interesse: "Exatas", link: "#Joao"},
        {nome: "Roberto", disciplina: "Banco de Dados", interesse: "Exatas", link: "#Roberto"}
    ];
    
    $scope.Bio = [
        {nome: "Darlene", disciplina: "Anatomia Humana", interesse: "Biológicas", link: "#Darlene"},
        {nome: "Ricardo", disciplina: "Taxonomia", interesse: "Biológicas", link: "#Ricardo"},
        {nome: "Joana", disciplina: "Botanica Geral", interesse: "Biológicas", link: "#Joana"},
        {nome: "Helizabete", disciplina: "Bioquímica", interesse: "Biológicas", link: "#Helizabete"},
        {nome: "Roberto", disciplina: "Embriologia", interesse: "Biológicas", link: "#Roberto"}
    ];
    
    $scope.Humanas = [
        {nome: "Marcos", disciplina: "Teorias e Sistemas em Psicologia I", interesse: "Humanas", link: "#Marcos"},
        {nome: "Gislene", disciplina: "Teorias e Sistemas em Psicologia II", interesse: "Humanas", link: "#Gislene"},
        {nome: "Talita", disciplina: "Teoria da História", interesse: "Humanas", link: "#Talita"},
        {nome: "Flavio", disciplina: "Metodologia da Pesquisa Histórica ", interesse: "Humanas", link: "#Flavio"},
        {nome: "Diego", disciplina: "Sociologia Moderna", interesse: "Humanas", link: "#Diego"}
    ];
    
    $scope.Featured = [
        {nome: "Pedro", disciplina: "Calculo I", interesse: "Exatas", link: "#Pedro"},
        {nome: "Ricardo", disciplina: "Taxonomia", interesse: "Biológicas", link: "#Ricardo"},
        {nome: "Ana", disciplina: "Calculo Numérico", interesse: "Exatas", link: "#Ana"},
        {nome: "Gislene", disciplina: "Teorias e Sistemas em Psicologia II", interesse: "Humanas", link: "#Gislene"},
        {nome: "Roberto", disciplina: "Banco de Dados", interesse: "Exatas", link: "#Roberto"}
    ];
    
    $scope.FilteredData = $scope.Featured;
    
    $scope.addFilter = function (value) {
        $scope.searchFilter = value;
    };
});

