export function calcularDiferenciaFechas(rango: string): string {
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    const [inicioMes, inicioAnio, finMes, finAnio] = rango
        .split(" - ")
        .map((fecha) => fecha.split(" "))
        .flat()
        .filter((item) => item !== "");

    const inicioMesIndex = meses.indexOf(inicioMes.toLowerCase());
    const finMesIndex = finMes.toLowerCase() === "actualidad" ? new Date().getMonth() : meses.indexOf(finMes.toLowerCase());
    const finAnioNum = finMes.toLowerCase() === "actualidad" ? new Date().getFullYear() : parseInt(finAnio);

    const diferenciaAnios = finAnioNum - parseInt(inicioAnio);
    const diferenciaMeses = (finMesIndex - inicioMesIndex + 1) + (diferenciaAnios * 12);

    if (diferenciaMeses < 12) {
        return `${diferenciaMeses} meses`;
    } else {
        const anios = Math.floor(diferenciaMeses / 12);
        const mesesRestantes = diferenciaMeses % 12;
        return `${anios} años ${mesesRestantes} meses`;
    }
}