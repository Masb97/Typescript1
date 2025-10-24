export var NivelEducatipo;
(function (NivelEducatipo) {
    NivelEducatipo["BACHILLERATO"] = "Bachillerato";
    NivelEducatipo["UNIVERSITARIO"] = "Universitario";
    NivelEducatipo["POSGRADO"] = "Posgrado";
})(NivelEducatipo || (NivelEducatipo = {}));
var Aprendiz = /** @class */ (function () {
    function Aprendiz(nombres, apellidos, avatar, edad, nivelEducativo, cursos) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.avatar = avatar;
        this.edad = edad;
        this.nivelEducativo = nivelEducativo;
        this.cursos = cursos;
    }
    Aprendiz.prototype.darCursosCertificados = function () {
        var totalCursosC = 0;
        for (var index = 0; index < this.cursos.length; index++) {
            var curso = this.cursos[index];
            if (curso.certificado) {
                totalCursosC += 1;
            }
        }
        return totalCursosC;
    };
    return Aprendiz;
}());
export { Aprendiz };
