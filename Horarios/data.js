const materias = [
    {name: "PORTUGUÊS", teacher: 0, rooms: [0]}, 
    {name: "FUND. COMP.", teacher: 1, rooms: [0]}, 
    {name: "INGLÊS INST.", teacher: 2, rooms: [0]}, 
    {name: "ALGORITMOS", teacher: 3, rooms: [0]},
    {name: "LIN.MARCAÇÃO", teacher: 4, rooms: [0, 1, 2]},
    {name: "CÁLCULO", teacher: 5, rooms: [0]},
    {name: "GER.MUDANÇAS", teacher: 6, rooms: [0, 1]},
    {name: "EST. DADOS", teacher: 1, rooms: [0, 1]},
    {name: "SOC. TEC. INF.", teacher: 7, rooms: [0]},
    {name: "PROBABILIDADE", teacher: 8, rooms: [0]},
    {name: "REDES", teacher: 9, rooms: [0, 1, 2]},
    {name: "L. S. WEB", teacher: 4, rooms: [0, 1]},
    {name: "PRO.DES.SOFT", teacher: 6, rooms: [3]},
    {name: "BANCO.DADOS I", teacher: 3, rooms: [3]},
    {name: "P. O. O.", teacher: 10, rooms: [3, 1]},
    {name: "METODOLOGIA", teacher: 11, rooms: [3]},
    {name: "SIS. OPER.", teacher: 12, rooms: [3]},
    {name: "GEREN.PROJETOS", teacher: 13, rooms: [3]},
    {name: "BANCO.DADOS II", teacher: 6, rooms: [3, 2]},
    {name: "LAB. REDES", teacher: 9, rooms: [3, 2]},
    {name: "PROG. WEB I", teacher: 10, rooms: [3, 4, 5]},
    {name: "TESTE.SOFTWARE", teacher: 4, rooms: [3]},
    {name: "A. P. S.", teacher: 14, rooms: [3, 2]},
    {name: "I. H. C.", teacher: 14, rooms: [6, 4, 5]},
    {name: "D. A. C.", teacher: 14, rooms: [6, 5]},
    {name: "SEGURANÇA", teacher: 9, rooms: [6, 4, 7]},
    {name: "PADRÕES", teacher: 4, rooms: [6, 4]},
    {name: "PROG. MÓVEIS", teacher: 15, rooms: [2]},
    {name: "T. C. C. I", teacher: 10, rooms: [6]},
    {name: "T. C. C. II", teacher: 10, rooms: [8]},
    {name: "LIBRAS", teacher: 16, rooms: [6]},
    {name: "EMPREENDED.", teacher: 17, rooms: [6]},
    {name: "R. H. T.", teacher: 17, rooms: [6]},
    {name: "GER. TE. INFOR", teacher: 15, rooms: [6, 4]},
    {name: "SIST. DISTRIB.", teacher: 12, rooms: [6]},
    {name: "PROG. WEB II", teacher: 15, rooms: [6, 2, 5]}
];

const professores = [
    "IGOR", "ANDRÉ", "DANIELA", "FÁBIO GOMES", "DIOGO", "NAIARA", "PAULO FREITAS", "ANA PAULA",
    "FÁBIO LEITE", "DALADIER", "PAULO EWERTON", "DEMÉTRIO", "AFONSO", "EVA", "ASHELEY", "FÁBIO BALA",
    "BRUNO VELOSO", "MARIANA"
];

const salas = ["Sala 01", "LAB.INF.1", "LAB.INF.4", "Sala 02", " LAB.INF.3", " LAB.INF.6", "Sala 03", "LAB.INF.5", "Sala 09"];

const periodos = [
    [[0, 0, 1, 2, 2], [3, 3, 1, 1, 1], [3, 3, 3, 4, 4], [5, 5, 5, 3, 3], [4, 4, 5, 5, 5]], 
    [[6, 6, 7, 7, 7], [8, 8, 7, 7, 7], [9, 9, 10, 10, 10], [10, 10, 10, 11, 11], [9, 9, 9, 11, 11]],
    [[12, 12, 12, 13, 13], [12, 12, 13, 13, 13], [14, 14, 14, 15, 15], [13, 13, 16, 16, 16], [14, 14, 14, 16, 16]],
    [[17, 17, 18, 18, 18], [19, 19, 19, 17, 17], [18, 18, 20, 20, 20], [21, 21, 21, 22, 22], [20, 20, 22, 22, 22]],
    [[23, 23, 24, 24, 24], [25, 25, 24, 24, 24], [26, 26, 25, 25, 25], [27, 27, 27, 27, 28], [23, 23, 26, 26, 26]],
    [[30, 30, 30, 31, 31], [31, 31, 32, 32, 32], [33, 33, 34, 34, 32], [33, 33, 35, 35, 35], [34, 34, 34, 35, 35]]
];