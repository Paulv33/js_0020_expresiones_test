function getStringLength(string) {
    return string.length;
    
}

function toUpperCase(string) {
    return string.toUpperCase();
}

function toLowerCase(string) {
    return string.toLowerCase();
}

function includesSubstring(string, substring) {
    return string.includes(substring);
}

function startsWithPrefix(string, prefix) {
    return string.startsWith(prefix);
}

function endsWithSuffix(string, suffix) {
    return string.endsWith(suffix);
    
}

function repeatString(string, count) {
    return string.repeat(count);
}

function replaceSubstring(string, oldSub, newSub) {
    return string.replace(oldSub, newSub);
    
}

function trimString(string) {
    return string.trim();
}

function concatenateStrings(str1, str2) {
    return str1 + str2;
    
}

module.exports = {
    getStringLength,
    toUpperCase,
    toLowerCase,
    includesSubstring,
    startsWithPrefix,
    endsWithSuffix,
    repeatString,
    replaceSubstring,
    trimString,
    concatenateStrings,

};
