enum Severity {
    Low,
    Medium,
    High,
    Critical
}

console.log(Severity.High);

//💡 If you want custom values

/*enum Severity {
  Low = 1,
  Medium = 2,
  High = 3,
  Critical = 4
}/*
//🚀 Or use string enums (better for readability)
/*enum Severity {
  Low = "LOW",
  Medium = "MEDIUM",
  High = "HIGH",
  Critical = "CRITICAL"
}/*

function needsImmediateAttention(severity: Severity): boolean {
    return severity >= Severity.High;
}

console.log("Low urgent?", needsImmediateAttention(Severity.Low));
console.log("Critical urgent?", needsImmediateAttention(Severity.Critical));
console.log("Severity name:", Severity[2]);

enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://api.com"
}

console.log(Environment.QA);