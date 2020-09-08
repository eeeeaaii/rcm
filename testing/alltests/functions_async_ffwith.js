//startgnumessage//
/*
This file is part of Vodka.

Vodka is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Vodka is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Vodka.  If not, see <https://www.gnu.org/licenses/>.
*/
//endgnumessage//
//testname// functions_async_ffwith
//startdescription//
/*
basic test for ffwith, tests the form where you pass a constant and the form where you pass a lambda, tests with various number of children in the exp
*/
//enddescription//
//testspec// |Shift|~|s|e|t|-|i|m|m|e|d|i|a|t|e|Tab|Shift|~|f|f|-|w|i|t|h|Tab|Shift|*|Tab|Shift|#|Shift|Tab|ArrowRight|Shift|&| |a|Enter|Shift| |Tab|Shift|~|Shift|+|Tab|Shift|@|a|Shift|#|1|0|0|Shift|Tab|Tab|Tab|Tab|Meta|c|v|Tab|Tab|Tab|Shift|#|1|Shift|#|2|Shift|Tab|Tab|Tab|Meta|c|v|Tab|Tab|Tab|ArrowRight|ArrowRight|Backspace|Backspace|Backspace|Backspace|Backspace|Shift|Tab|Tab|Tab|Meta|c|v|Tab|Tab|ArrowRight|Backspace|ArrowRight|Shift|#|1|0|1|Shift|Tab|Tab|Meta|c|v|Tab|Tab|Tab|Shift|#|#|#|Shift|Tab|Tab|Tab|ArrowUp|ArrowUp|ArrowUp|ArrowUp|Enter|ArrowDown|Enter|ArrowDown|Enter|ArrowDown|Enter|ArrowDown|Enter
//starttest//
var harness = require('../testharness');

var testactions = [];

testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Backquote'});
testactions.push({type:'keyup',code:'Backquote'});
testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'KeyS'});
testactions.push({type:'keydown',code:'KeyE'});
testactions.push({type:'keydown',code:'KeyT'});
testactions.push({type:'keyup',code:'KeyS'});
testactions.push({type:'keyup',code:'KeyE'});
testactions.push({type:'keyup',code:'KeyT'});
testactions.push({type:'keydown',code:'Minus'});
testactions.push({type:'keyup',code:'Minus'});
testactions.push({type:'keydown',code:'KeyI'});
testactions.push({type:'keyup',code:'KeyI'});
testactions.push({type:'keydown',code:'KeyM'});
testactions.push({type:'keyup',code:'KeyM'});
testactions.push({type:'keydown',code:'KeyM'});
testactions.push({type:'keydown',code:'KeyE'});
testactions.push({type:'keyup',code:'KeyM'});
testactions.push({type:'keyup',code:'KeyE'});
testactions.push({type:'keydown',code:'KeyD'});
testactions.push({type:'keydown',code:'KeyI'});
testactions.push({type:'keyup',code:'KeyD'});
testactions.push({type:'keydown',code:'KeyA'});
testactions.push({type:'keyup',code:'KeyI'});
testactions.push({type:'keydown',code:'KeyT'});
testactions.push({type:'keydown',code:'KeyE'});
testactions.push({type:'keyup',code:'KeyA'});
testactions.push({type:'keyup',code:'KeyT'});
testactions.push({type:'keyup',code:'KeyE'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Backquote'});
testactions.push({type:'keyup',code:'Backquote'});
testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'KeyF'});
testactions.push({type:'keyup',code:'KeyF'});
testactions.push({type:'keydown',code:'KeyF'});
testactions.push({type:'keyup',code:'KeyF'});
testactions.push({type:'keydown',code:'Minus'});
testactions.push({type:'keyup',code:'Minus'});
testactions.push({type:'keydown',code:'KeyW'});
testactions.push({type:'keyup',code:'KeyW'});
testactions.push({type:'keydown',code:'KeyI'});
testactions.push({type:'keyup',code:'KeyI'});
testactions.push({type:'keydown',code:'KeyT'});
testactions.push({type:'keyup',code:'KeyT'});
testactions.push({type:'keydown',code:'KeyH'});
testactions.push({type:'keyup',code:'KeyH'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'ShiftLeft'});
testactions.push({type:'keydown',code:'Digit8'});
testactions.push({type:'keyup',code:'Digit8'});
testactions.push({type:'keyup',code:'ShiftLeft'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Digit3'});
testactions.push({type:'keyup',code:'Digit3'});
testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'ArrowRight'});
testactions.push({type:'keyup',code:'ArrowRight'});
testactions.push({type:'keydown',code:'ShiftLeft'});
testactions.push({type:'keydown',code:'Digit7'});
testactions.push({type:'keyup',code:'Digit7'});
testactions.push({type:'keyup',code:'ShiftLeft'});
testactions.push({type:'keydown',code:'Space'});
testactions.push({type:'keyup',code:'Space'});
testactions.push({type:'keydown',code:'KeyA'});
testactions.push({type:'keyup',code:'KeyA'});
testactions.push({type:'keydown',code:'Enter'});
testactions.push({type:'keyup',code:'Enter'});
testactions.push({type:'keydown',code:'ShiftLeft'});
testactions.push({type:'keydown',code:'Space'});
testactions.push({type:'keyup',code:'Space'});
testactions.push({type:'keyup',code:'ShiftLeft'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Backquote'});
testactions.push({type:'keyup',code:'Backquote'});
testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'ShiftLeft'});
testactions.push({type:'keydown',code:'Equal'});
testactions.push({type:'keyup',code:'Equal'});
testactions.push({type:'keyup',code:'ShiftLeft'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Digit2'});
testactions.push({type:'keyup',code:'Digit2'});
testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'KeyA'});
testactions.push({type:'keyup',code:'KeyA'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Digit3'});
testactions.push({type:'keyup',code:'Digit3'});
testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Digit1'});
testactions.push({type:'keyup',code:'Digit1'});
testactions.push({type:'keydown',code:'Digit0'});
testactions.push({type:'keyup',code:'Digit0'});
testactions.push({type:'keydown',code:'Digit0'});
testactions.push({type:'keyup',code:'Digit0'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'MetaRight'});
testactions.push({type:'keydown',code:'KeyC'});
testactions.push({type:'keydown',code:'KeyV'});
testactions.push({type:'keyup',code:'MetaRight'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'ArrowRight'});
testactions.push({type:'keyup',code:'ArrowRight'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Digit3'});
testactions.push({type:'keyup',code:'Digit3'});
testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Digit1'});
testactions.push({type:'keyup',code:'Digit1'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Digit3'});
testactions.push({type:'keyup',code:'Digit3'});
testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Digit2'});
testactions.push({type:'keyup',code:'Digit2'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'MetaRight'});
testactions.push({type:'keydown',code:'KeyC'});
testactions.push({type:'keydown',code:'KeyV'});
testactions.push({type:'keyup',code:'MetaRight'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'ArrowRight'});
testactions.push({type:'keyup',code:'ArrowRight'});
testactions.push({type:'keydown',code:'ArrowRight'});
testactions.push({type:'keyup',code:'ArrowRight'});
testactions.push({type:'keydown',code:'ArrowRight'});
testactions.push({type:'keyup',code:'ArrowRight'});
testactions.push({type:'keydown',code:'Backspace'});
testactions.push({type:'keyup',code:'Backspace'});
testactions.push({type:'keydown',code:'Backspace'});
testactions.push({type:'keyup',code:'Backspace'});
testactions.push({type:'keydown',code:'Backspace'});
testactions.push({type:'keyup',code:'Backspace'});
testactions.push({type:'keydown',code:'Backspace'});
testactions.push({type:'keyup',code:'Backspace'});
testactions.push({type:'keydown',code:'Backspace'});
testactions.push({type:'keyup',code:'Backspace'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'MetaRight'});
testactions.push({type:'keydown',code:'KeyC'});
testactions.push({type:'keydown',code:'KeyV'});
testactions.push({type:'keyup',code:'MetaRight'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'ArrowRight'});
testactions.push({type:'keyup',code:'ArrowRight'});
testactions.push({type:'keydown',code:'ArrowRight'});
testactions.push({type:'keyup',code:'ArrowRight'});
testactions.push({type:'keydown',code:'Backspace'});
testactions.push({type:'keyup',code:'Backspace'});
testactions.push({type:'keydown',code:'ArrowRight'});
testactions.push({type:'keyup',code:'ArrowRight'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Digit3'});
testactions.push({type:'keyup',code:'Digit3'});
testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Digit1'});
testactions.push({type:'keyup',code:'Digit1'});
testactions.push({type:'keydown',code:'Digit0'});
testactions.push({type:'keyup',code:'Digit0'});
testactions.push({type:'keydown',code:'Digit1'});
testactions.push({type:'keyup',code:'Digit1'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'MetaRight'});
testactions.push({type:'keydown',code:'KeyC'});
testactions.push({type:'keydown',code:'KeyV'});
testactions.push({type:'keyup',code:'MetaRight'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Digit3'});
testactions.push({type:'keyup',code:'Digit3'});
testactions.push({type:'keydown',code:'Digit3'});
testactions.push({type:'keyup',code:'Digit3'});
testactions.push({type:'keydown',code:'Digit3'});
testactions.push({type:'keyup',code:'Digit3'});
testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'Tab'});
testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'ArrowUp'});
testactions.push({type:'keyup',code:'ArrowUp'});
testactions.push({type:'keydown',code:'ArrowUp'});
testactions.push({type:'keyup',code:'ArrowUp'});
testactions.push({type:'keydown',code:'ArrowUp'});
testactions.push({type:'keyup',code:'ArrowUp'});
testactions.push({type:'keydown',code:'ArrowUp'});
testactions.push({type:'keyup',code:'ArrowUp'});
testactions.push({type:'keydown',code:'Enter'});
testactions.push({type:'keyup',code:'Enter'});
testactions.push({type:'keydown',code:'ArrowDown'});
testactions.push({type:'keyup',code:'ArrowDown'});
testactions.push({type:'keydown',code:'Enter'});
testactions.push({type:'keyup',code:'Enter'});
testactions.push({type:'keydown',code:'ArrowDown'});
testactions.push({type:'keyup',code:'ArrowDown'});
testactions.push({type:'keydown',code:'Enter'});
testactions.push({type:'keyup',code:'Enter'});
testactions.push({type:'keydown',code:'ArrowDown'});
testactions.push({type:'keyup',code:'ArrowDown'});
testactions.push({type:'keydown',code:'Enter'});
testactions.push({type:'keyup',code:'Enter'});
testactions.push({type:'keydown',code:'ArrowDown'});
testactions.push({type:'keyup',code:'ArrowDown'});
testactions.push({type:'keydown',code:'Enter'});
testactions.push({type:'keyup',code:'Enter'});

harness.runTestNew(testactions, 'direct');
//endtest//
