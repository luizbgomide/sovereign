---
layout: default
title: Home
---

{% include toc-equipment.md %}

# Equipment

Each individual piece of equipment should be recorded on its own small piece of [card stock](https://www.amazon.com/Printworks-Cardstock-Certified-Projects-00540/dp/B07FX5LCXK), specifying it's encumbrance in the top right. This allows players to pass equipment around, leave it places, etc. Stowed items should be kept in a separate pile from Readied items.

## Coins and Money

Purchases are made using coins. A copper piece (c) purchases a loaf of bread or three pints of cheap ale. 10c make a silver piece (s). 10s or 100c make a gold piece (g).

Uncommon coins are electrum pieces (e) worth 5s, and platinum pieces (p) worth 5g.

To estimate the price of an unlisted item, $1 is about 1c in 2024 US Dollars. A night at a best western costs ~$70 and so night at a cheap Inn costs ~7s. Cheap bar food costs about $10 and a meal in an Inn costs about 1s. It won't be totally accurate, but it'll be close enough to not matter. Adventuring equipment is purposefully inflated to represent the large relative difference in demand.

The monthly standard of living for various members of society are provided to get a better grasp on the value of gold:

| <span id="wage">Profession<span>            | Monthly Income/Expenses |
| ------------------------------------------- | ----------------------- |
| Skilled labor                               | 3-12g                   |
| Journeyman craftsmen, 1st level Delvers     | 12-40g                  |
| Master craftsmen, 2nd level Delvers         | 40-100g                 |
| Master professionals, 3rd-4th level Delvers | 100-450g                |
| Barons, 5th-7th level Delvers               | 450-2,000g              |
| Counts, 8th-9th level Delvers               | 2,000-12,000g           |
| Dukes, 10th level Delvers                   | 12,000-80,000g          |
| Kings                                       | 80,000+g                |

Income and expenses are roughly equal in most cases. Net worth (often in the form of land and equipment and whatnot) is ~33x monthly income/expenses. Coinage tends to make up about 5% of a NPC's net worth.

So, a Baron with a 1000g/mo income also has ~1000g/mo in expenses. They're worth ~33,000g (mostly in land, structures, etc), and have 1650g on hand.

## Equipment Availability

Markets are not able to supply infinite amounts of goods. The monthly availability of goods by the population of a market is given below. Villages range from 20 to 999 people, Towns from 1k to 8k, Cities from 8k to 12k, and Big Cities from 12k to 100k.

| Price / Pop     | 100k+ | 25k+ | 10k+ | 3k+ | 1k+ | 999- |
| --------------- | ----- | ---- | ---- | --- | --- | ---- |
| 1g or less      | 2,750 | 700  | 425  | 100 | 35  | 15   |
| 2g–10g          | 300   | 70   | 35   | 10  | 3   | 1    |
| 11–100g         | 20    | 5    | 2    | 1   | 25% | 10%  |
| 101–1,000g      | 7     | 2    | 1    | 25% | 10% | 5%   |
| 1,001–10,000g   | 2     | 1    | 25%  | 10% | 5%  | 1%   |
| 10,001g or more | 25%   | 10%  | 3%   | 1%  | NA  | NA   |

If the entry contains a percentage, treat that as the chance that one such item exists.

Goods that are meaningfully different from each other are counted separately. Thus, a 1500-population town can sell the party 3 [Short Swords](#short-sword) (7g each) *and* 3 [War Axes](#war-axe) (10g each) per month.

This chart represents the party's ability to both buy *and sell* in a market, so a party has a 5% monthly chance to be able to sell a 750g emerald in a village with a population of 400.

## Weapons

Each of the weapons on the following chart has a listed damage it inflicts on a successful hit, an amount of [Shock](/combat#shock) inflicted on a miss to targets with an [AC](#armor-class) equal or less than that given, and a particular attribute relevant to the weapon’s use. That attribute’s [modifier](/rules#attribute-modifiers) is applied to all attack rolls, damage rolls, and Shock inflicted by the weapon. If more than one attribute is listed, the wielder uses whichever is better.

Ranged weapons have both short and long ranges listed in feet. Attacking a target within short range is done at no penalty, while hitting a target at long range is done with a -2 penalty to the attack roll. Ranged weapons cannot be used while an enemy is locked in melee with the wielder.

Some weapons have additional unique traits, perhaps being particularly slow to reload, or requiring two hands to wield correctly, or being easily hidden in common clothing. The GM might choose to apply these traits to improvised weapons snatched up by the PCs if any of them seem appropriate.

| Weapon         | Dmg       | Shock   | Attribute | Range/Feet | Traits     | Cost | enc |
| -------------- | --------- | ------- | --------- | ---------- | ---------- | ---- | --- |
| Axe, Hand      | 1d6       | 1/AC 15 | STR/DEX   | 10/30      | T          | 4g   | 1   |
| <span id="war-axe">Axe, War</span>       | 1d10      | 3/AC 15 | STR       | -          | 2H         | 10g  | 2   |
| Blackjack      | 1d4       | None    | STR/DEX   | -          | S, LL      | 1g   | 1   |
| Bow, Large     | 1d8       | None    | DEX       | 100/600    | 2H, R, PM  | 7g   | 2   |
| Bow, Small     | 1d6       | None    | DEX       | 50/300     | 2H, R, PM  | 3g   | 1   |
| Club           | 1d4       | None    | STR/DEX   | 10/30      | T, LL      | -    | 1   |
| Club, Great    | 1d10      | 2/AC 15 | STR       | -          | 2H         | 1g   | 2   |
| Crossbow       | 1d10      | None    | DEX       | 100/300    | 2H, SR, PM | 30g  | 1   |
| Dagger         | 1d4       | 1/AC 15 | STR/DEX   | 30/60      | S, T, PM   | 3g   | 1   |
| Polearm        | 1d10      | 2/AC 15 | STR       | -          | 2H, L      | 7g   | 2   |
| Great Hammer   | 1d10      | 2/AC 18 | STR       | -          | 2H         | 10g  | 2   |
| Mace           | 1d6       | 1/AC 18 | STR       | -          | LL         | 5g   | 1   |
| Oil, Military  | 2d8       | 1/AC 18 | DEX       | 20/40      | T          | 2g   | 1   |
| Shield         | 1d4       | None    | STR/DEX   | -          | LL         | 10g  | -   |
| Spear          | 1d6       | 2/AC 13 | STR/DEX   | 30/60      | T          | 3g   | 1   |
| Throwing Blade | 1d4       | None    | DEX       | 30/60      | S, T, N    | 1g   | 1   |
| Staff          | 1d6       | 1/AC 13 | STR/DEX   | -          | 2H, LL     | 1g   | 1   |
| Stiletto       | 1d4       | 1/AC 18 | DEX       | -          | S, PM      | 3g   | 1   |
| Sword, Great   | 1d12      | 2/AC 15 | STR       | -          | 2H         | 15g  | 2   |
| Sword          | 1d8       | 2/AC 13 | STR/DEX   | -          | -          | 10g  | 1   |
| <span id="short-sword">Sword, Short</span>   | 1d6       | 2/AC 15 | STR/DEX   | -          | -          | 7g   | 1   |
| Unarmed Attack | 1d2+Skill | None    | STR/DEX   | -          | LL         | -    | -   |

- **2H**: Two Handed. The weapon requires two hands to use in combat. Ranged two-handed weapons cannot be fired effectively while an enemy is within melee range.
- **L**: Long. The weapon is unusually long, allowing melee attacks to be made at targets up to 10 feet distant, even if an ally is in the way. Even so, the wielder still needs to be within five feet of a foe to count as being in melee with them for purposes of forcing Fighting Withdrawals, disrupting large ranged weapons, or similar maneuvers.
- **LL**: Less Lethal. Foes brought to zero HP by this weapon can always be left alive at the wielder’s discretion.
- **N**: Numerous. Five of these count as only one Readied item.
- **PM**: Precisely Murderous. When used for an Execution Attack, the weapon applies an additional -1 penalty to the Physical save and does double damage even if it succeeds.
- **R**: Reload. The weapon takes a Move action to reload. If the user has at least Shoot-1 skill, they can reload as a Free action instead.
- **S**: Subtle. Easily hidden in clothing or jewelry.
- **SR**: Slow Reload. It takes a Main Action to reload this weapon. SS: Single Shot. This weapon takes ten rounds to reload, and the reloading effort is spoiled if an enemy melees the wielder.
- **T**: Throwable. While the weapon can be used in melee, it may be thrown out to the listed range as well, albeit it does no Shock in that case. Throwing a weapon while in melee applies a -4 penalty to the attack roll.

Military oil may be ignited and thrown with a DEX/Shoot attck, dealing 1d8 damage for 2 rounds to the target. If the attack fails, it lands in a random adjacent square and deals 1d3 damage to that square and all adjacent squares.

Weapons requiring ammunition require a [Quiver](#quiver). Don't bother tracking ammo if you have one. Be adults - you don't *actually* have infinite ammo. You cannot build bridges out of your infinite arrow or use them to fill pits.

## Armor

Armor provides an <strong id="armor-class">Armor Class</strong> (AC). Equipped armor must always occupy Readied slots.

Chain applies a -2 penalty to Sneak checks. Plate applies a -3 penalty to Sneak and Exert checks.

| Name    | AC  | Cost | enc |
| ------- | --- | ---- | --- |
| None    | 10  | 0g   | 0   |
| Leather | 12  | 20g  | 1   |
| Chain   | 14  | 40g  | 2   |
| Plate   | 16  | 60g  | 3   |
| Shield  | +1  | 10g  | 1   |

## Adventuring Gear

This list is **not** exhaustive.

| Item                            | Cost | enc |
| ------------------------------- | ---- | --- |
| Blanket                         | 2g   | 2   |
| Chest (holds 50 enc)            | 22g  | 25  |
| Crowbar                         | 1g   | 1   |
| Disguise Kit                    | 25g  | 4   |
| Ear Trumpet                     | 15g  | 1   |
| Earplugs                        | 1s   | -   |
| Grappling Hook                  | 25g  | 1   |
| Hammer (small)                  | 2g   | 1   |
| <span id="healers-kit">Healer's Kit</span>                    | 10g  | 1   |
| <span id="holy-water">Holy Water (1 pint)</span>             | 25g  | 1   |
| Ink (1 pint)                    | 7g   | 1   |
| Iron Spikes (6)                 | 1g   | 1   |
| Journal                         | 10g  | 1   |
| Laborer’s Tools                 | 10g  | 2   |
| Lantern                         | 10g  | 1   |
| Lock                            | 20g  | 1   |
| Manacles                        | 2g   | 1   |
| Mirror (hand-sized, steel)      | 5g   | 1   |
| Oil, Common (1 pint)            | 3s   | 1   |
| Oil, Military (1 pint)          | 2g   | 1   |
| Pole, 10ft                      | 1cp  | 2   |
| <span id="quiver">Quiver + ∞ Arrows</span>               | 10g  | 1   |
| Rations, Iron (one day)         | 2s   | 1   |
| Rope, 50’                       | 1g   | 2   |
| Spell Book (blank)              | 20g  | 1   |
| Stakes (6)                      | 3g   | 1   |
| <span id="thieves-tools">Thieves’ Tools</span>                  | 25g  | 1   |
| Tinderbox (flint & steel)       | 8s   | 1   |
| Torches (2)                     | 1s   | 1   |
| Waterskin                       | 6s   | 1   |
| Whistle                         | 1g   | -   |

Adventuring equipment tends to be useful [within the fiction](https://www.merriam-webster.com/dictionary/diegetic) rather than directly mechanically useful, especially as a part of plans in the [core gameplay loop](/rules#core-gameplay-loop). Some examples:

- Ropes and spikes are great for climbing.
- 10ft Poles for triggering traps and generally poking things.
- Soap for lubricating things; less flammable than oil.
- Parchment to make a map or write down strange markings.
- Ball bears clog up traps, make enemies slip, make loud thunks, and roll on slopes.
- Acid for throwing or pouring into locks.
- Fishing rods for fishing (hah) or trying to fetch things out of reach.
- Magnets for grabbing distant keys, especially tied to fishing rods.
- Pickaxes, hammers, axes, crowbars, shovels, etc for dismanting what's in front of you, be it ground, wall, or ceiling.
- Glass vials for storing strange liquids or bugs.
- Glue for binding things that cannot be easily tied. Mirrors for peering around corners.
- Flour for causing explosions and coating invisible targets.

## Services

To pay a professional for a few hours of their time, divide their [monthly wage](#wage) by 40. For a day, divide their monthly wage by 20. For a month or more, pay for however many months you keep them on retainer.

For example, paying a guard to watch your rooms for 7 days might cost `10g (monthly wage for skilled labor) / 20 (for a day) * 7 (days) = 4g`.

Bribes to overlook a minor crime cost a day's worth of the witness' time. To overlook a major crime, a month. To overlook a capital crime, a year.

Curing Diseases costs 500g, lifting curses or undoing magic costs 1000g. These kinds of curatives are subject to Equipment Availability for the market.

## Henchmen

Henchmen are Delvers for hire, and are built just like a player's Delver. Henchmen demand a [monthly wage](#wage) based on their level (paid in advance; non-negotiable) and half a share (non-negotiable) of all treasure, and earn half share (non-negotiable) of the party's XP.

| Level | Wage | Level | Wage   |
| ----- | ---- | ----- | ------ |
| 1     | 25g  | 6     | 800g   |
| 2     | 50g  | 7     | 1600g  |
| 3     | 100g | 8     | 3000g  |
| 4     | 200g | 9     | 7250g  |
| 5     | 400g | 10    | 12000g |

Henchmen, especially higher level ones, are subject to their own market availability:

| Level / Pop | 100k+ | 25k+ | 10k+ | 3k+ | 1k+ | 999- |
| ----------- | ----- | ---- | ---- | --- | --- | ---- |
| 1           | 5d10  | 2d6  | 1d4  | 1d2 | 65% | 20%  |
| 2           | 3d10  | 2d4  | 1d3  | 1   | 40% | 15%  |
| 3           | 1d10  | 1d3  | 85%  | 33% | 15% | 5%   |
| 4           | 1d6   | 1d2  | 45%  | 15% | 5%  | -    |

Henchmen are ultimately NPCs and the GM has the final say on what they do. However, the player who hired the Henchman generally controls them.

A Delver may each have one Henchman.

## Magic Items

Magic Items are wonderous, expensive objects. Some magic items are unique, while provide flat numerical bonuses, or mimic spell effects.

The most common type of magic item is a `+N` item, such as a "Dagger+1" or "Shield+2".

For **weapons**, the number is added to attack rolls and damage rolls and [Shock](/combat#shock). Further, the weapon deals damage to enemies resistant to mundane damage, such as [shadows](https://oldschoolessentials.necroticgnome.com/srd/index.php/Shadow).

For **armor** and **shields**, increase AC by the bonus. Do *not* decrease their encumbrance like in other games.

### Potions

A [Readied](/rules#readied) potion may be consumed as a [Move Action](/combat#move-action). Typically potions mimic the effects of spells, but some have unique effects. Effects with durations last `1d6+6` [Turns](/rules#turn).

### Scrolls

Spellcasting mages can read a scroll to activate its spell as a [Main Action](/combat#main-action).

In order to safely cast a spell from a scroll, a Delver needs to have a Magic skill of at least one less than the spell's level. For example, to cast from a Scroll of [Haste](/spells#haste) (a level 2 spell), the Delver needs to have at least Magic-1.

If a Delver doesn’t have a high enough Magic skill, they can attempt anyway. Roll a DC (8 + Spell Level) INT/Magic skill check. If it fails by one or two points, the spell fizzles and is wasted. If it fails by more than two points, it goes off, but at the wrong target or with the wrong effect at the GM’s discretion. If the check succeeds, the spell goes off as intended.

For example, if a Delver with Magic-0 tries to use a Scroll of Haste, they would need to roll a DC 10 INT/Magic skill check. If their result is an 8 or 9, the spell harmlessly fizzles. If the result is a 7 or lower, they might accidentally Haste a foe!

If the Spell in a scroll has an effect dependent on caster level (like [Arcane Spark](/spells#arcane-spark)), use twice the spell's level minus one. For example, a first level spell scroll would use a caster level of `2 * 1 - 1 = 1`, and a 4th level spell scroll would use a caster level of `2 * 4 - 1 = 7`. This corresponds to the lowest level a High Mage has access to the spell.

### Buying and Selling Magic Items

Magic Items can be sold, though they are subject [Market Availbility](#equipment-availability). In order to estimate their price, decide which [spell](/spells) effect the item is most similar to, and note the spell level. If no such spell exists, try to guage which spell level it would be.

Then, consult the following chart to determine market value:

| Effect Type                  | Price (g)               |
| ---------------------------- | ----------------------- |
| One Use Effect               | 1,000 × level           |
| Charged Effect               | 1,000 × level × charges |
| Use 1/week                   | 3,000 × level           |
| Use 3/week                   | 4,000 × level           |
| Use 1/day                    | 5,000 × level           |
| Use 3/day                    | 6,000 × level           |
| Use 1/hour                   | 8,000 × level           |
| Use 1/3 turns                | 12,500 × level          |
| Use 1/turn                   | 16,500 × level          |
| At-Will                      | 25,000 × level          |
| Always On...                 |                         |
| ...from effect ≥ 1 day       | 7,500 × level           |
| ...from effect ≥ 1 hour      | 12,000 × level          |
| ...from effect ≥ 3 turns     | 19,000 × level          |
| ...from effect ≥ 1 turn      | 25,000 × level          |
| +1 (e.g. Sword+1 or Armor+1) | 5,000                   |
| +2                           | 15,000                  |
| +3                           | 35,000                  |


Each settlement has *some* sort of magic item market, however sparse, based on the population of the settlement. The following table lists how many of each type of item are available for purchase. Regenerate monthly.

| Item Type / Population | 100k+ | 25k+ | 10k+ | 3k+ | 1k+ | 999k- |
| ---------------------- | ----- | ---- | ---- | --- | --- | ----- |
| Potion                 | 37    | 9    | 5    | 1   | 50% | 10%   |
| Ring                   | 9     | 2    | 1    | 30% | 10% | -     |
| Scroll                 | 53    | 13   | 7    | 2   | 70% | 20%   |
| Rod/Wand/Staff         | 9     | 2    | 1    | 30% | 10% | -     |
| Miscellaneous Weapon   | 9     | 2    | 1    | 30% | 10% | -     |
| Sword                  | 37    | 9    | 5    | 1   | 50% | 10%   |
| Miscellaneous Item     | 9     | 2    | 1    | 30% | 10% | -     |
| Armor & Shield         | 14    | 4    | 2    | 40% | 20% | 10%   |

Each category corresponds to one of the [OSE Generators](https://oldschoolessentials.necroticgnome.com/generators/magic-item-generator), rerolling cursed items. For example, a City like [Baklin, Jewel of the Seas](https://beyondfomalhaut.blogspot.com/2020/11/module-baklin-jewel-of-seas-now.html) with a population of 20,000 would have, on any given month, something like:

- Potion of Invisibility (1000g)
- Potion of Flying (2000g)
- Potion of ESP (1000g)
- Potion of Fire Resistance (2000g)
- Potion of Polymorph Self (4000g)
- Ring of Invisibility (16500g)
- Scroll [Dominate Sense] (1000g)
- Scroll [Haste] (2000g)
- Scroll [Augury] (3000g)
- Scroll [Suggestion] (2000g)
- Scroll [Dominate Person] (1000g)
- Scroll [Scry] (2000g)
- Scroll [Magic Bomb] (3000g)
- Rod of Cancellation (4000g)
- War Hammer +2 (15000g)
- Sword +3 (35000g)
- Sword +1 (5000g)
- Sword +1 [+3 vs Lycanthropes] (12500g)
- Sword +1 [+3 vs Undead] (12500g)
- Sword +1 [Light] (21500g)
- Shield +3 (35000g)
- Shield +1 (5000g)

### Sentient Weapons

Some weapons are intelligent, and a subset of those are able to communicate. Weielders who offend their sentient weapons make a DC (8 + magic bonus) INT/Stab or Shoot skill check to force its obedience for the day. If the check is failed, the weapon is treated as totally nonmagical for the rest of the day.

Weapons able to speak aloud may speak at (in)opportune times, at GM discretion.
