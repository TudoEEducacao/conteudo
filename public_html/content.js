angular.module("conteudo", []);
angular.module("conteudo").controller("conteudoCtrl", function($scope) {
    $scope.app = "Conteudo";
    $scope.searchFilter = "";
    $scope.Exatas = [
        {nome: "Pedro", disciplina: "Calculo I"},
        {nome: "Maria", disciplina: "Calculo II"},
        {nome: "Ana", disciplina: "Calculo Numérico"},
        {nome: "João", disciplina: "Engenharia de Software"},
        {nome: "Roberto", disciplina: "Banco de Dados"},
        {nome: "Kátia", disciplina: "Mecânica dos Fluidos"}
    ];
    
    $scope.addFilter = function (value) {
        $scope.searchFilter = value;
    };
});

