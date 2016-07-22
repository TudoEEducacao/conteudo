angular.module("conteudo", []);
angular.module("conteudo").controller("conteudoCtrl", function($scope) {
    $scope.app = "Conteudo";
    $scope.searchFilter = "";
    $scope.Exatas = [
        {nome: "Pedro", disciplina: "Calculo I", interesse: "Exatas", link: "#Pedro", photoLink: ""},
        {nome: "Maria", disciplina: "Calculo II", interesse: "Exatas", link: "#Maria", photoLink: ""},
        {nome: "Ana", disciplina: "Calculo Numérico", interesse: "Exatas", link: "#Ana", photoLink: ""},
        {nome: "João", disciplina: "Engenharia de Software", interesse: "Exatas", link: "#Joao", photoLink: ""},
        {nome: "Roberto", disciplina: "Banco de Dados", interesse: "Exatas", link: "#Roberto", photoLink: ""}
    ];
    
    $scope.Bio = [
        {nome: "Darlene", disciplina: "Anatomia Humana", interesse: "Biológicas", link: "#Darlene", photoLink: ""},
        {nome: "Ricardo", disciplina: "Taxonomia", interesse: "Biológicas", link: "#Ricardo", photoLink: ""},
        {nome: "Joana", disciplina: "Botanica Geral", interesse: "Biológicas", link: "#Joana", photoLink: ""},
        {nome: "Helizabete", disciplina: "Bioquímica", interesse: "Biológicas", link: "#Helizabete", photoLink: ""},
        {nome: "Roberto", disciplina: "Embriologia", interesse: "Biológicas", link: "#Roberto", photoLink: ""}
    ];
    
    $scope.Humanas = [
        {nome: "Marcos", disciplina: "Teorias e Sistemas em Psicologia I", interesse: "Humanas", link: "#Marcos", photoLink: ""},
        {nome: "Gislene", disciplina: "Teorias e Sistemas em Psicologia II", interesse: "Humanas", link: "#Gislene", photoLink: ""},
        {nome: "Talita", disciplina: "Teoria da História", interesse: "Humanas", link: "#Talita", photoLink: ""},
        {nome: "Flavio", disciplina: "Metodologia da Pesquisa Histórica ", interesse: "Humanas", link: "#Flavio", photoLink: ""},
        {nome: "Diego", disciplina: "Sociologia Moderna", interesse: "Humanas", link: "#Diego", photoLink: ""}
    ];
    
    $scope.Featured = [
        {nome: "Pedro", disciplina: "Calculo I", interesse: "Exatas", link: "#Pedro", photoLink: ""},
        {nome: "Ricardo", disciplina: "Taxonomia", interesse: "Biológicas", link: "#Ricardo", photoLink: ""},
        {nome: "Ana", disciplina: "Calculo Numérico", interesse: "Exatas", link: "#Ana", photoLink: ""},
        {nome: "Gislene", disciplina: "Teorias e Sistemas em Psicologia II", interesse: "Humanas", link: "#Gislene", photoLink: ""},
        {nome: "Roberto", disciplina: "Banco de Dados", interesse: "Exatas", link: "#Roberto", photoLink: ""}
    ];
    
    $scope.Avaiable = $scope.Exatas.concat($scope.Bio, $scope.Humanas);
    
    $scope.FilteredData = $scope.Featured;
    
    $scope.addDisciplinaFilter = function (value) {
        $scope.searchFilter = value;
        
        $scope.FilteredData = $scope.Avaiable.filter(function (element){
           return element.disciplina === value; 
        });
    };
    
    $scope.addInteresseFilter = function (value) {
        $scope.searchFilter = value;

        $scope.FilteredData = $scope.Avaiable.filter(function (element){
           return element.interesse === value; 
        });
    };
    
});

