
import * as PF from './parserfunctions.js'


// Generated by PEG.js v0.11.0-master.b7b87ea, https://pegjs.org/

function peg$subclass(child, parent) {
  function C() { this.constructor = child; }
  C.prototype = parent.prototype;
  child.prototype = new C();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message = message;
  this.expected = expected;
  this.found = found;
  this.location = location;
  this.name = "SyntaxError";

  // istanbul ignore next
  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found, location) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },

    class: function(expectation) {
      var escapedParts = expectation.parts.map(function(part) {
        return Array.isArray(part)
          ? classEscape(part[0]) + "-" + classEscape(part[1])
          : classEscape(part);
      });

      return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
    },

    any: function() {
      return "any character";
    },

    end: function() {
      return "end of input";
    },

    other: function(expectation) {
      return expectation.description;
    },

    not: function(expectation) {
      return "not " + describeExpectation(expectation.expected);
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/"/g,  "\\\"")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/\]/g, "\\]")
      .replace(/\^/g, "\\^")
      .replace(/-/g,  "\\-")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = expected.map(describeExpectation);
    var i, j;

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== undefined ? options : {};

  var peg$FAILED = {};

  var peg$startRuleFunctions = { start: peg$parsestart };
  var peg$startRuleFunction = peg$parsestart;

  var peg$c0 = "v2:";
  var peg$c1 = "(";
  var peg$c2 = ")";
  var peg$c3 = "*(";
  var peg$c4 = "&(";
  var peg$c5 = "~(";
  var peg$c6 = "!yes";
  var peg$c7 = "!no";
  var peg$c8 = "@";
  var peg$c9 = "#";
  var peg$c10 = "-";
  var peg$c11 = "$";
  var peg$c12 = "\"";
  var peg$c13 = "%";
  var peg$c14 = "^";
  var peg$c15 = ".";
  var peg$c16 = "|SP|";
  var peg$c17 = "|EP|";
  var peg$c18 = "||";

  var peg$r0 = /^[a-zA-Z0-9:\-]/;
  var peg$r1 = /^[a-zA-Z0-9_:\-]/;
  var peg$r2 = /^[0-9]/;
  var peg$r3 = /^[^"]/;
  var peg$r4 = /^[^|]/;
  var peg$r5 = /^[ \r\n\t]/;

  var peg$e0 = peg$literalExpectation("v2:", false);
  var peg$e1 = peg$literalExpectation("(", false);
  var peg$e2 = peg$literalExpectation(")", false);
  var peg$e3 = peg$literalExpectation("*(", false);
  var peg$e4 = peg$literalExpectation("&(", false);
  var peg$e5 = peg$literalExpectation("~(", false);
  var peg$e6 = peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"], ":", "-"], false, false);
  var peg$e7 = peg$literalExpectation("!yes", false);
  var peg$e8 = peg$literalExpectation("!no", false);
  var peg$e9 = peg$literalExpectation("@", false);
  var peg$e10 = peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"], "_", ":", "-"], false, false);
  var peg$e11 = peg$literalExpectation("#", false);
  var peg$e12 = peg$literalExpectation("-", false);
  var peg$e13 = peg$classExpectation([["0", "9"]], false, false);
  var peg$e14 = peg$literalExpectation("$", false);
  var peg$e15 = peg$literalExpectation("\"", false);
  var peg$e16 = peg$classExpectation(["\""], true, false);
  var peg$e17 = peg$literalExpectation("%", false);
  var peg$e18 = peg$literalExpectation("^", false);
  var peg$e19 = peg$literalExpectation(".", false);
  var peg$e20 = peg$literalExpectation("|SP|", false);
  var peg$e21 = peg$literalExpectation("|EP|", false);
  var peg$e22 = peg$classExpectation(["|"], true, false);
  var peg$e23 = peg$literalExpectation("||", false);
  var peg$e24 = peg$classExpectation([" ", "\r", "\n", "\t"], false, false);

  var peg$f0 = function(NEX) { return NEX; };
  var peg$f1 = function(CHILDREN) { return PF.makeOrgList(CHILDREN); };
  var peg$f2 = function(CHILDREN) { return PF.makeExpList(CHILDREN); };
  var peg$f3 = function(CHILDREN) { return PF.makeLambdaList(CHILDREN); };
  var peg$f4 = function(CHILDREN) { return PF.makeCommandList(CHILDREN); };
  var peg$f5 = function(NAME, CHILDREN) { return PF.makeNamedCommandList(NAME, CHILDREN); };
  var peg$f6 = function(NAME, PRIVATE, CHILDREN) { return PF.makeNamedCommandListWithPrivate(NAME, PRIVATE, CHILDREN); };
  var peg$f7 = function() { return PF.makeBool(true); };
  var peg$f8 = function() { return PF.makeBool(false); };
  var peg$f9 = function(SYMBOL) { return PF.makeSymbol(SYMBOL); };
  var peg$f10 = function(NEGATION, DIGITS) { return PF.makeInteger(NEGATION, DIGITS); };
  var peg$f11 = function(STRING_CONTENTS) { return PF.makeString(STRING_CONTENTS); };
  var peg$f12 = function(FLOAT) { return PF.makeFloat(FLOAT); };
  var peg$f13 = function() { return PF.makeNil() };
  var peg$f14 = function(INT_PART, DEC_DIGITS) {return DEC_DIGITS; };
  var peg$f15 = function(INT_PART, DEC_PART) { return  DEC_PART ? (INT_PART + '.' + DEC_PART) : INT_PART};
  var peg$f16 = function(DIGITS) { return DIGITS.join(''); };
  var peg$f17 = function(DIGITS) { return '-' + DIGITS.join(''); };
  var peg$f18 = function(DATA) { return DATA; };
  var peg$f19 = function(CHAR) { return CHAR; };
  var peg$f20 = function() { return '|'; };

  var peg$currPos = 0;
  var peg$savedPos = 0;
  var peg$posDetailsCache = [{ line: 1, column: 1 }];
  var peg$expected = [];
  var peg$silentFails = 0;

  var peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function offset() {
    return peg$savedPos;
  }

  function range() {
    return [peg$savedPos, peg$currPos];
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos];
    var p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;

      return details;
    }
  }

  var peg$VALIDFILENAME = typeof options.filename === "string" && options.filename.length > 0;
  function peg$computeLocation(startPos, endPos) {
    var loc = {};

    if ( peg$VALIDFILENAME ) loc.filename = options.filename;

    var startPosDetails = peg$computePosDetails(startPos);
    loc.start = {
      offset: startPos,
      line: startPosDetails.line,
      column: startPosDetails.column
    };

    var endPosDetails = peg$computePosDetails(endPos);
    loc.end = {
      offset: endPos,
      line: endPosDetails.line,
      column: endPosDetails.column
    };

    return loc;
  }

  function peg$begin() {
    peg$expected.push({ pos: peg$currPos, variants: [] });
  }

  function peg$expect(expected) {
    var top = peg$expected[peg$expected.length - 1];

    if (peg$currPos < top.pos) { return; }

    if (peg$currPos > top.pos) {
      top.pos = peg$currPos;
      top.variants = [];
    }

    top.variants.push(expected);
  }

  function peg$end(invert) {
    var expected = peg$expected.pop();
    var top = peg$expected[peg$expected.length - 1];
    var variants = expected.variants;

    if (top.pos !== expected.pos) { return; }

    if (invert) {
      variants = variants.map(function(e) {
        return e.type === "not" ? e.expected : { type: "not", expected: e };
      });
    }

    Array.prototype.push.apply(top.variants, variants);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found, location),
      expected,
      found,
      location
    );
  }

  function peg$buildError() {
    var expected = peg$expected[0];
    var failPos = expected.pos;

    return peg$buildStructuredError(
      expected.variants,
      failPos < input.length ? input.charAt(failPos) : null,
      failPos < input.length
        ? peg$computeLocation(failPos, failPos + 1)
        : peg$computeLocation(failPos, failPos)
    );
  }

  function peg$parsestart() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parseparser_version_identifier();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      s3 = peg$parsenex();
      if (s3 !== peg$FAILED) {
        s4 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f0(s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseparser_version_identifier() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    rule$expects(peg$e0);
    if (input.substr(peg$currPos, 3) === peg$c0) {
      s0 = peg$c0;
      peg$currPos += 3;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsenex() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$parseatom();
    if (s0 === peg$FAILED) {
      s0 = peg$parselist();
    }

    return s0;
  }

  function peg$parselist() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$parseorg_list();
    if (s0 === peg$FAILED) {
      s0 = peg$parseexp_list();
      if (s0 === peg$FAILED) {
        s0 = peg$parselambda_list();
        if (s0 === peg$FAILED) {
          s0 = peg$parsecmd_list();
        }
      }
    }

    return s0;
  }

  function peg$parseorg_list() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e1);
    if (input.charCodeAt(peg$currPos) === 40) {
      s1 = peg$c1;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsenex_with_space();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsenex_with_space();
      }
      s3 = peg$parse_();
      rule$expects(peg$e2);
      if (input.charCodeAt(peg$currPos) === 41) {
        s4 = peg$c2;
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f1(s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseexp_list() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e3);
    if (input.substr(peg$currPos, 2) === peg$c3) {
      s1 = peg$c3;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsenex_with_space();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsenex_with_space();
      }
      s3 = peg$parse_();
      rule$expects(peg$e2);
      if (input.charCodeAt(peg$currPos) === 41) {
        s4 = peg$c2;
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f2(s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parselambda_list() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e4);
    if (input.substr(peg$currPos, 2) === peg$c4) {
      s1 = peg$c4;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsenex_with_space();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsenex_with_space();
      }
      s3 = peg$parse_();
      rule$expects(peg$e2);
      if (input.charCodeAt(peg$currPos) === 41) {
        s4 = peg$c2;
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f3(s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecmd_list() {
    var s0, s1, s2, s3, s4, s5, s6;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e5);
    if (input.substr(peg$currPos, 2) === peg$c5) {
      s1 = peg$c5;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsenex_with_space();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsenex_with_space();
      }
      s3 = peg$parse_();
      rule$expects(peg$e2);
      if (input.charCodeAt(peg$currPos) === 41) {
        s4 = peg$c2;
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f4(s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      rule$expects(peg$e5);
      if (input.substr(peg$currPos, 2) === peg$c5) {
        s1 = peg$c5;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsecmd_name();
        s3 = [];
        s4 = peg$parsenex_with_space();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsenex_with_space();
        }
        s4 = peg$parse_();
        rule$expects(peg$e2);
        if (input.charCodeAt(peg$currPos) === 41) {
          s5 = peg$c2;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
        }
        if (s5 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f5(s2, s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        rule$expects(peg$e5);
        if (input.substr(peg$currPos, 2) === peg$c5) {
          s1 = peg$c5;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parsecmd_name();
          s3 = peg$parseprivate_data_section();
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parsenex_with_space();
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parsenex_with_space();
            }
            s5 = peg$parse_();
            rule$expects(peg$e2);
            if (input.charCodeAt(peg$currPos) === 41) {
              s6 = peg$c2;
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f6(s2, s3, s4);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
    }

    return s0;
  }

  function peg$parsecmd_name() {
    var s0, s1;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = [];
    rule$expects(peg$e6);
    if (peg$r0.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      rule$expects(peg$e6);
      if (peg$r0.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parsenex_with_space() {
    var s0, s1, s2;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parse_();
    s2 = peg$parsenex();
    if (s2 !== peg$FAILED) {
      peg$savedPos = s0;
      s0 = peg$f0(s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseatom() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$parseboolean_expression();
    if (s0 === peg$FAILED) {
      s0 = peg$parsesymbol_expression();
      if (s0 === peg$FAILED) {
        s0 = peg$parseinteger_expression();
        if (s0 === peg$FAILED) {
          s0 = peg$parsestring_expression();
          if (s0 === peg$FAILED) {
            s0 = peg$parsefloat_expression();
            if (s0 === peg$FAILED) {
              s0 = peg$parsenil_expression();
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parseboolean_expression() {
    var s0, s1;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e7);
    if (input.substr(peg$currPos, 4) === peg$c6) {
      s1 = peg$c6;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f7();
    }
    s0 = s1;
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      rule$expects(peg$e8);
      if (input.substr(peg$currPos, 3) === peg$c7) {
        s1 = peg$c7;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f8();
      }
      s0 = s1;
    }

    return s0;
  }

  function peg$parsesymbol_expression() {
    var s0, s1, s2, s3;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e9);
    if (input.charCodeAt(peg$currPos) === 64) {
      s1 = peg$c8;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      rule$expects(peg$e10);
      if (peg$r1.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          rule$expects(peg$e10);
          if (peg$r1.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
          }
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f9(s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseinteger_expression() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e11);
    if (input.charCodeAt(peg$currPos) === 35) {
      s1 = peg$c9;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      rule$expects(peg$e12);
      if (input.charCodeAt(peg$currPos) === 45) {
        s2 = peg$c10;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      s3 = [];
      rule$expects(peg$e13);
      if (peg$r2.test(input.charAt(peg$currPos))) {
        s4 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          rule$expects(peg$e13);
          if (peg$r2.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
          }
        }
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f10(s2, s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsestring_expression() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e14);
    if (input.charCodeAt(peg$currPos) === 36) {
      s1 = peg$c11;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      rule$expects(peg$e15);
      if (input.charCodeAt(peg$currPos) === 34) {
        s2 = peg$c12;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        rule$expects(peg$e16);
        if (peg$r3.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          rule$expects(peg$e16);
          if (peg$r3.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
          }
        }
        rule$expects(peg$e15);
        if (input.charCodeAt(peg$currPos) === 34) {
          s4 = peg$c12;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f11(s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      rule$expects(peg$e14);
      if (input.charCodeAt(peg$currPos) === 36) {
        s1 = peg$c11;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseprivate_data_section();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f11(s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parsefloat_expression() {
    var s0, s1, s2;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e17);
    if (input.charCodeAt(peg$currPos) === 37) {
      s1 = peg$c13;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsefloat_digits();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f12(s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsenil_expression() {
    var s0, s1;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e18);
    if (input.charCodeAt(peg$currPos) === 94) {
      s1 = peg$c14;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f13();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsefloat_digits() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parseinteger_part();
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      rule$expects(peg$e19);
      if (input.charCodeAt(peg$currPos) === 46) {
        s3 = peg$c15;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parsedecimal_part();
        if (s4 !== peg$FAILED) {
          peg$savedPos = s2;
          s2 = peg$f14(s1, s4);
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      peg$savedPos = s0;
      s0 = peg$f15(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseinteger_part() {
    var s0, s1, s2, s3;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = [];
    rule$expects(peg$e13);
    if (peg$r2.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        rule$expects(peg$e13);
        if (peg$r2.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f16(s1);
    }
    s0 = s1;
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      rule$expects(peg$e12);
      if (input.charCodeAt(peg$currPos) === 45) {
        s1 = peg$c10;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        rule$expects(peg$e13);
        if (peg$r2.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            rule$expects(peg$e13);
            if (peg$r2.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
            }
          }
        } else {
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f17(s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parsedecimal_part() {
    var s0, s1, s2;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = [];
    rule$expects(peg$e13);
    if (peg$r2.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        rule$expects(peg$e13);
        if (peg$r2.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f16(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseprivate_data_section() {
    var s0, s1, s2, s3;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parsestart_private_data();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseprivate_data_items();
      s3 = peg$parseend_private_data();
      if (s3 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f18(s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsestart_private_data() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    rule$expects(peg$e20);
    if (input.substr(peg$currPos, 4) === peg$c16) {
      s0 = peg$c16;
      peg$currPos += 4;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseend_private_data() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    rule$expects(peg$e21);
    if (input.substr(peg$currPos, 4) === peg$c17) {
      s0 = peg$c17;
      peg$currPos += 4;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseprivate_data_items() {
    var s0, s1;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = [];
    s1 = peg$parseprivate_data_item();
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = peg$parseprivate_data_item();
    }

    return s0;
  }

  function peg$parseprivate_data_item() {
    var s0, s1;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e22);
    if (peg$r4.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f19(s1);
    }
    s0 = s1;
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      rule$expects(peg$e23);
      if (input.substr(peg$currPos, 2) === peg$c18) {
        s1 = peg$c18;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f20();
      }
      s0 = s1;
    }

    return s0;
  }

  function peg$parse_() {
    var s0, s1;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = [];
    rule$expects(peg$e24);
    if (peg$r5.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      rule$expects(peg$e24);
      if (peg$r5.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
      }
    }

    return s0;
  }


    



  peg$begin();
  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$expect(peg$endExpectation());
    }

    throw peg$buildError();
  }
}

export {
  peg$SyntaxError as SyntaxError,
  peg$parse as parse
};

export default {
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
};
