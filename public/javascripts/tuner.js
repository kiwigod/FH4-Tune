/**
 * Maximum allowed values for the specified setting
 */
const max = {
    'arb': 65,
    'spr': 230,
    'rbd': 20
}

/**
 * Minimum allowed values for the specified setting
 */
const min = {
    'arb': 1,
    'spr': 46,
    'rbd': 3
}

/**
 * Calculations
 */
const formulas = {
    'arb_f': wd => (max['arb']-min['arb'])*(wd/100)+min['arb'],
    'arb_r': wd => (max['arb']-min['arb'])*(100-wd)/100+min['arb'],
    'spr_f': wd => (max['spr']-min['spr'])*(wd/100)+min['spr'],
    'spr_r': wd => (max['spr']-min['spr'])*(100-wd)/100+min['spr'],
    'rbd_f': wd => (max['rbd']-min['rbd'])*(wd/100)+min['rbd'],
    'rbd_r': wd => (max['rbd']-min['rbd'])*(100-wd)/100+min['rbd'],
    'bmp_f': rbd => rbd*0.6,
    'bmp_r': rbd => rbd*0.6
}

/**
 * What calculation should be used as input for the key
 */
const mapping = {
    'bmp_f': formulas['rbd_f'],
    'bmp_r': formulas['rbd_r']
}

/**
 * Apply the calculations to the view
 */
function calculate() {
    const wd = document.getElementById('wd').value;
    Object.keys(formulas).forEach(key => {
        let input = wd;
        if (key in mapping) {
            input = mapping[key](wd);
        };
        document.getElementById(key).value = formulas[key](input).toFixed(1);
    });
}
