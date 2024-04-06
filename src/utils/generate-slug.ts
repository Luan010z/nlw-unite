export function generateSlug(text: string): string {
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove acentos
        .replace(/[^\w\s]/gi, "") // Remove símbolos
        .replace(/\s+/g, "-") // Substitui espaços por hífens
        .toLowerCase(); // Converte para minúsculas
}

