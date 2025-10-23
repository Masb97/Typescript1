export var NivelEducatipo;
(function (NivelEducatipo) {
    NivelEducatipo["BACHILLERATO"] = "Bachillerato";
    NivelEducatipo["UNIVERSITARIO"] = "Universitario";
    NivelEducatipo["POSGRADO"] = "Posgrado";
})(NivelEducatipo || (NivelEducatipo = {}));
var Aprendiz = /** @class */ (function () {
    function Aprendiz(nombres, apellidos, avatar, edad, nivelEducativo) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.avatar = avatar;
        this.edad = edad;
        this.nivelEducativo = nivelEducativo;
    }
    return Aprendiz;
}());
export { Aprendiz };
