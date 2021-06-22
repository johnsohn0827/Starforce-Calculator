const events = {
    none: 0,
    discount: 1,
    guarantee: 2,
    extra: 4
}

const mvp = {
    none: 1,
    silver: 0.97,
    gold: 0.95,
    diamond: 0.9
}

const destroyStar = 12;

const data = {
    0: { success: 0.95, drop: false },
    1: { success: 0.9, drop: false },
    2: { success: 0.85, drop: false },
    3: { success: 0.85, drop: false },
    4: { success: 0.8, drop: false },
    5: { success: 0.75, drop: false },
    6: { success: 0.7, drop: false },
    7: { success: 0.65, drop: false },
    8: { success: 0.6, drop: false },
    9: { success: 0.55, drop: false },
    10: { success: 0.5, drop: false },
    11: { success: 0.45, drop: true },
    12: { success: 0.4, drop: true, destroy: 0.01, safeguard: true },
    13: { success: 0.35, drop: true, destroy: 0.02, safeguard: true },
    14: { success: 0.3, drop: true, destroy: 0.02, safeguard: true },
    15: { success: 0.3, drop: false, destroy: 0.03, safeguard: true },
    16: { success: 0.3, drop: true, destroy: 0.03, safeguard: true },
    17: { success: 0.3, drop: true, destroy: 0.03, safeguard: false },
    18: { success: 0.3, drop: true, destroy: 0.04, safeguard: false },
    19: { success: 0.3, drop: true, destroy: 0.04, safeguard: false },
    20: { success: 0.3, drop: false, destroy: 0.1, safeguard: false },
    21: { success: 0.3, drop: true, destroy: 0.1, safeguard: false },
    22: { success: 0.03, drop: true, destroy: 0.2, safeguard: false },
    23: { success: 0.02, drop: true, destroy: 0.3, safeguard: false },
    24: { success: 0.01, drop: true, destroy: 0.4, safeguard: false }
};