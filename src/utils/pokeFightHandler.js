export const calculateDamage = (attack, defense, randomFactor) => {
    const minimumDamage = 5;
    const damage = Math.max(minimumDamage, (attack - defense) * randomFactor);
    return Math.round(damage);
};