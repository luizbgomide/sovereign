---
layout: default
title: Home
---

# Combat

This chapter covers the combat rules of *Sovereign*. We offer both a gridded combat system and a simpler side-based two-action system (one move, one main) to resolve violent conflicts.

The system provides a variety of options to create [informed, impactful choices](https://www.bastionland.com/2018/09/the-ici-doctrine-information-choice.html), especially through actions like [Screen an Ally](#screen-an-ally-move), [Total Defense](/combat#total-defense-instant), and [Make a Snap Attack](/combat#make-a-snap-attack-instant). Additionally, [Shock](#shock) ensures that every attack *has an effect*, making combat fast and costly.

## Table Of Contents

{% include chapter-toc.html items=site.data.combat %}

## The Grid

Combat takes place on a 1" = 5' grid. I recommend creating [icons](https://youtu.be/LBZPi4oKlCQ?si=uC8io8mRS8oR57S7) (I use [these WoW class icons](https://dribbble.com/shots/6175355-World-of-Warcraft-Vector-Class-Icons)) for the Party and using numbered [meeples](https://www.amazon.com/dp/B07BZ36NYJ) for enemies, with different colors for each enemy type.

The grid helps clarify a few situations:

- Allies can move through each other as long as they do not end their movement in an occupied square.
- A character cannot move through a standing enemy. They need to [Shove](#shoving) (or kill) them to pass. Creatures 8x bigger (in any dimension) than their enemies treat enemies as [difficult terrain](#difficult-terrain).
- Two squares are adjacent if they share an edge or corner (diagonals count as adjacent).
- Movement occurs in 5' increments between adjacent squares. This allows for greater diagonal movement compared to cardinal directions (in a [cartesian sense](https://en.wikipedia.org/wiki/Cartesian_coordinate_system)), but the reduced bookkeeping is worth the loss of realism.
- Abilities with a radius create a square on the grid where each side equals twice the radius. For instance, [Magic Bomb](/spells#magic-bomb) creates a 20' radius explosion, which appears as an 8x8 square on the grid.
- Some squares are <strong id="difficult-terrain">Difficult Terrain</strong>, requiring 10' of movement to enter, while others (such as walls) are impassible.
- Diagonal movement cannot be used to cut corners (like walls or enemies).

### Line of Sight and Cover

Alice has <strong id="line-of-sight">Line of Sight</strong> to Bob if a line can be drawn from any point in Alice's 5' *cube* to any point in Bob's cube without passing through a solid object, such as a wall (not another character).

Alice has <strong id="half-cover">half cover</strong> from Bob if Bob has line of sight but cannot see *each* corner of Alice's cube.

<figure>
    <img src="/assets/images/bob-horizontal-no-cover.png" alt="tiny" />
    <figcaption>Bob has no cover from Alice</figcaption>
</figure>

<figure>
    <img src="/assets/images/alice-horizontal-half-cover.png" alt="tiny" />
    <figcaption>Alice has half cover from Bob</figcaption>
</figure>

<figure>
    <img src="/assets/images/bob-vertical-no-cover.png" alt="tiny" />
    <figcaption>Vertical. Bob has no cover from Alice.</figcaption>
</figure>

<figure>
    <img src="/assets/images/alice-vertical-half-cover.png" alt="tiny" />
    <figcaption>Vertical. Alice has half cover from Bob.</figcaption>
</figure>

Alice has <strong id="full cover">full cover</strong> from Bob if Bob has line of sight but cannot see *each* corner of Alice's cube. This typically occurs when shooting through windows or [arrow slits](https://en.wikipedia.org/wiki/Arrowslit).

In practical terms, having the high ground (your feet are above their eyes) always gives at least partial cover. Playing next to walls grants cover. Attempt to claim these positions, and force your opponents into open space or below you.

## Surprise

If a group is caught completely unaware, they may suffer surprise, granting their enemies a full free round of action before initiative is rolled. Surprise is *almost always* the result of an ambush (though the GM may rule that the [Core Gameplay Loop](/rules#core-gameplay-loop) results in surprise) or [Hard Entry](/rules#hard-entry).

The GM decides when surprise applies, possibly calling for an opposed DEX/[Sneak](/rules#sneak) check (for an ambush) or STR/[Exert](/rules#exert) vs WIS/[Notice](/rules#notice) (for Hard Entry).

Groups cannot be surprised if they are actively anticipating combat. If the Party is moving carefully through a dungeon, they cannot be ambushed.

## Combat Sequence

Each participating side rolls `1d8`, with the player's side adding the highest DEX from among the Party. Starting with the side that rolled the highest, each member of that side takes all their actions in any order they choose. Once every member of that side has acted, the next highest side follows suit. This process repeats until all sides have acted, then the cycle begins again from the top, following the same order. Initiative is not re-rolled.

The GM wins ties.

## Combat Action Types

Attacks, movement, spellcasting, and other combat activities require one of the following four types of actions:

<strong id="main-action">Main Actions</strong> are a character’s primary action during a combat round, such as attacking an enemy, applying first aid to an ally, casting a spell, or frantically dodging incoming attacks. A combatant gets one Main Action per round.

<strong id="move-action">Move Actions</strong> involve moving the character’s normal movement rate of 30 feet or performing another brief physical action, such as standing up from prone. A combatant gets one Move Action per round but can use their [Main Action](#main-action) for a second.

<strong id="free-action">Free Actions</strong> are quick, simple acts that require only a moment’s concentration. Speaking a few words or activating certain abilities may qualify as Free Actions. A combatant can take as many Free Actions per round as the GM deems reasonable.

<strong id="instant-action">Instant Actions</strong> are special actions, often granted by powers (such as [Veteran's Luck](/classes#class-ability-veterans-luck)) or certain combat actions (like [Hold an Action](#hold-an-action-move)). Instant Actions can be performed outside of the character’s turn, even after dice rolls. A combatant can use as many Instant Actions as the GM allows. Instant Actions performed simultaneously are resolved at the same time, with the GM addressing ambiguities.

Many actions (such as [Run](/combat#run-move) and [Stand Up](/combat#stand-up-move)) allow any adjacent foes armed with melee weapons to make a free <strong id="attack-of-opportunity">Attack of Opportunity</strong>. To avoid this, either stay out of melee range or use the [Disengage](/combat#disengage-main) action first.

## Combat Actions

| Action                                                             | Type      | Attack of Opportunity? |
| ------------------------------------------------------------------ | --------- | ---------------------- |
| [Make a Melee Attack](/combat#make-a-melee-attack-main)     | Main      | No                     |
| [Make a Ranged Attack](/combat#make-a-ranged-attack-main)   | Main      | No                     |
| [Make a Swarm Attack](/combat#make-a-swarm-attack-main)     | Main      | No                     |
| [Charge](/combat#charge-special)                            | Move+Main | Yes                    |
| [Use a Skill](/combat#use-a-skill-main)                     | Main      | Yes                    |
| [Reload a Weapon](/combat#reload-a-weapon-main)             | Main      | No                     |
| [Ready or Stow an Item](/combat#ready-or-stow-an-item-main) | Main      | No                     |
| [Disengage](/combat#disengage-main)                         | Main      | No                     |
| [Screen an Ally](/combat#screen-an-ally-move)               | Move      | Sometimes              |
| [Run](/combat#run-move)                                     | Move      | Yes                    |
| [Pick up an Item](/combat#pick-up-an-item-move)             | Move      | Yes                    |
| [Stand Up](/combat#stand-up-move)                           | Move      | Yes                    |
| [Hold An Action](/combat#hold-an-action-move)               | Move      | No                     |
| [Go Prone](/combat#go-prone-free)                           | Free      | No                     |
| [Total Defense](/combat#total-defense-instant)              | Instant   | No                     |
| [Make a Snap Attack](/combat#make-a-snap-attack-instant)    | Instant   | No                     |

This list is not exhaustive! If you want to do something else or a variant of any of these actions, describe what you're doing and what you hope to achieve, and the GM will figure out the specifics—refer to the [Core Gameplay Loop](/rules#core-gameplay-loop). Normally, this involves determining what type of action it requires ([Main](#main-action), [Move](#move-action), [Free](#free-action), etc.), whether or not it provokes an [Attack of Opportunity](#attack-of-opportunity), and any other relevant details.

### Make a Melee Attack (Main)

[Attack](#attack-rolls) a target within melee range using either an unarmed strike or a melee weapon. Melee attacks use the [Brawl](/rules#brawl) or [Stab](/rules#stab) skill, depending on the type of attack.

### Make a Ranged Attack (Main)

[Attack](#attack-rolls) a target using a bow or thrown weapon. The [Shoot](/rules#shoot) skill is used for these attacks, though [Stab](/rules#stab) or [Exert](/rules#exert) may be used for thrown weapons. If an enemy is within melee range, one-handed ranged weapons and thrown weapons suffer a -4 penalty to hit, while bows and other two-handed ranged weapons cannot be fired at all.

### Make a Snap Attack (Instant)

As an [Instant Action](#instant-action), give up your [Main Action](#main-action) to either [Make a Melee Attack](#make-a-melee-attack-main) or [Make a Ranged Attack](#make-a-ranged-attack-main) with a -4 penalty to hit. You can Make a Snap Attack even when it’s not your turn, but only if you haven’t taken your [Main Action](#main-action) yet this round. Only well-trained and disciplined NPCs have the focus to Make a Snap Attack.

Because Snap Attack is an [Instant Action](#instant-action), you can use it to interrupt a spell or kill a foe *after* they hit but *before* damage is rolled, potentially preventing that damage.

### Make a Swarm Attack (Main)

Target an enemy within range of your weapon and take this action until up to three allies have Made a Swarm Attack on that same target this round. At that point, or earlier if desired, one of the assailants can [Make a Melee Attack](#make-a-melee-attack-main) or [Make a Ranged Attack](#make-a-ranged-attack-main) with a +2 bonus to hit and +1 bonus to damage for every other assailant, up to a maximum bonus of +6 to hit and +3 damage.

This bonus damage does not add to the attack’s [Shock](#shock) and cannot cause the attack to exceed its usual maximum damage. Any [Shock](#shock) inflicted by this attack is always applicable, regardless of the target’s AC, use of a shield, or powers that grant immunity to [Shock](#shock). The damage caused by a Swarm Attack reflects the hazards of being overwhelmed by multiple armed foes, rather than Shock itself.

### Charge (Special)

Spend both your [Main Action](#main-action) and [Move Action](#move-action) to move up to twice your normal movement rate in a straight line, making a melee or thrown ranged attack at the end with a +2 bonus to hit. You must move at least 5 feet to build sufficient momentum, and you suffer a -2 penalty to AC until your next turn.

If you start adjacent to an armed melee combatant, they gain an [Attack of Opportunity](#attack-of-opportunity). To avoid this, you must [Disengage](/combat#disengage-main) first.

### Screen an Ally (Move)

Move up to your normal movement rate to get adjacent to an ally. You then physically block attacks directed at them until the start of your next turn, provided they stay within 5 feet of you. Enemies attacking your ward must make a successful [opposed](/rules#opposed-skill-checks) combat [skill check](/rules#skill-checks) against you, using either STR or DEX and [Brawl](/rules#brawl) or [Stab](/rules#stab).

If the enemy succeeds, their attack targets your ward normally. If you succeed, their attack targets you instead. You can screen against a number of attackers each round equal to your highest combat skill level. Thus, you need at least level 1 in a combat skill to effectively screen.

Multiple defenders can screen the same target, in which case the opposed skill check is compared to all defenders. The attack then targets the lowest-rolling successful defender. You can only screen against attacks that you could feasibly parry or body-block.

If you moved and started adjacent to an armed melee combatant, they gain an [Attack of Opportunity](#attack-of-opportunity). To avoid this, you must [Disengage](/combat#disengage-main) first.

Screen an Ally can be especially useful for protecting ranged allies (particularly spellcasters) from ranged attacks.

### Total Defense (Instant)

Give up your [Main Action](#main-action) to focus entirely on dodging and evading incoming attacks. Your AC increases by 2, and you become immune to [Shock](#shock) until the start of your next turn, including the otherwise-unavoidable damage from a [Swarm Attack](#make-a-swarm-attack-main). You cannot take this action if you have already used your [Main Action](#main-action) for the round.

Since Total Defense is an [Instant Action](#instant-action), you may activate it *after* you see the result of an [Attack Roll](#attack-rolls) against you.

### Run (Move)

Move your normal movement rate in combat, which is 30 feet for an ordinary human. When you leave a melee combatant's range (usually 5 feet, but it may be longer for large foes or those with [Long](/equipment#long) weapons), they gain an [Attack of Opportunity](#attack-of-opportunity). To avoid this, you must [Disengage](/combat#disengage-main) first.

### Disengage (Main)

Disengage from all adjacent melee attackers for the rest of the round, allowing you to move or act without incurring an [Attack of Opportunity](#attack-of-opportunity). This action *does not move you* on its own.

### Use a Skill (Main)

Perform first aid on a downed comrade, cry out an appeal for parley, or use any skill that typically wouldn’t take more than six seconds.

If you attempt to Use a Skill while adjacent to an armed melee combatant, they gain an [Attack of Opportunity](#attack-of-opportunity).

### Ready or Stow an Item (Main)

A character can [Ready](/rules#readied) an item for use from their pack or stowage, or [Stow](/rules#stowed) an item, according to the encumbrance rules. Sheathing or holstering a [Readied](/rules#readied) weapon does not require this action, though the GM may disallow rapid weapon swaps if they start to become implausible.

### Reload a Weapon (Main)

Reload a bow or crossbow from a [Readied](/rules#readied) [Quiver](/equipment#quiver).

- Bows can be reloaded as a [Free Action](#free-action) if the shooter has at least [Shoot](/rules#shoot)-1; otherwise, it requires a [Move Action](#move-action) to nock a new arrow.
- Crossbows can be reloaded as a [Move Action](#free-action) if the shooter has at least [Shoot](/rules#shoot)-1; otherwise, it requires a [Move Action](#move-action) to load a new bolt.

Ammunition tracking is not required, but don't plan actions assuming you have infinite ammo.

### Pick up an Item (Move)

Scoop up a dropped item within melee range, leaving it [Readied](/rules#readied) in your hand.

If you attempt to pick up an item while adjacent to an armed melee combatant, they gain an [Attack of Opportunity](#attack-of-opportunity). To avoid this, you must [Disengage](/combat#disengage-main) first.

### Stand Up (Move)

Rise from a prone position, picking up any dropped items as you do so.

If you stand up while adjacent to an armed melee combatant, they gain an [Attack of Opportunity](#attack-of-opportunity). To avoid this, you must [Disengage](/combat#disengage-main) first.

### Go Prone (Free)

Fall prone, giving ranged attackers a -2 penalty when targeting you, but granting melee attackers a +2 bonus. While prone, your normal movement rate is halved.

### Hold An Action (Move)

Spend your [Move Action](#move-action) to delay acting during your side’s turn. You may trigger the rest of your turn’s actions as an [Instant Action](#instant-action) at any point until the end of the round, after which they are lost. If your held action responds to another’s action, yours resolves first.

## Attack Rolls

When an assailant makes an attack, they roll `1d20` and add their attack bonus, the weapon’s relevant [Attribute Modifier](/rules#attribute-modifiers), their relevant combat skill level ([Brawl](/rules#brawl), [Stab](/rules#stab), or [Shoot](/rules#shoot)), and any magical bonuses from their weapon. If the total equals or exceeds the target’s AC, the attack hits. If it falls short, the attack misses.

Each weapon in the equipment section lists the attributes it can use. For example, a [dagger](/equipment#dagger) can use either STR or DEX. The attacker chooses which attribute to apply for modifying the weapon’s attack and damage rolls.

NPCs typically do not have attribute modifiers or skill levels. Instead, a trained NPC combatant’s combined attack bonus usually equals their HD, with occasional additional bonuses reflecting superior training or talent.

Some common situations may grant bonuses or penalties to an attack roll, and the GM may introduce others based on the circumstances.

| Situation                                                                  | Mod |
|----------------------------------------------------------------------------|-----|
| Shooting at a distant prone foe                                            | -2  |
| Attacking an adjacent prone foe                                            | +2  |
| Melee attacking while prone                                                | -4  |
| Your target is past your bow or thrown weapon’s normal range, up to its maximum long range. | -2  |
| The target has [half cover](#half-cover)                                   | -2  |
| The target has [full cover](#full-cover)                                   | -4  |
| Making a thrown attack while in melee                                      | -4  |
| Throwing a weapon while in melee                                           | -4  |
| Shooting a bow or crossbow while in melee                                  | N/A |
| You are shooting at a target you can’t see but you know where they are.    | -4  |
| You are shooting at a target you can’t see and don’t know their exact position. | N/A |

## Damage

If an attack hits, it inflicts HP damage by rolling the weapon’s damage die plus the relevant [Attribute Modifier](/rules#attribute-modifiers). Class abilities (like [Killing Blow](/classes#class-ability-killing-blow)), feats (like [Armsmaster](/feats#armsmaster-c)), and magic weapon enchantments can further increase this damage.

For purely unarmed attacks, add your [Brawl](/rules#brawl) skill to the damage.

If the damage result is less than your [Shock](#shock) damage, inflict that much instead.

## Shock

Some melee weapons inflict Shock damage even on a missed attack roll. This reflects the inevitable harm a poorly-armored combatant suffers during armed combat. Shock is recorded as a point value and target AC, such as “Shock 2/AC 15.” If the wielder misses a target with this weapon, but the target's AC is equal to or less than the Shock rating, the target still suffers the listed Shock damage. For example, if a weapon misses a victim with Melee AC 13, but has Shock 2/AC 15, the target still takes 2 points of damage.

Some attacks apply Shock on a miss regardless of the target’s AC. This may be granted by certain abilities (like [Armsmaster](/feats#armsmaster-c)) or may be part of an NPC’s natural talents. Such Shock ratings are recorded with a “-” for the affected AC, such as “Shock 5/-,” meaning the Shock applies automatically unless negated by shields or abilities that grant immunity to Shock.

Only specific modifiers add to Shock damage, such as the wielder’s relevant attribute modifier for the weapon and any bonuses explicitly stated to add to Shock, including a magic weapon's bonus.

A character using a [shield](/equipment#shield) ignores the first source of Shock they would normally take in a round. Some [Feats](/feats) or special actions like [Total Defense](#total-defense-instant) can also render a character immune to Shock.

An attack that hits never deals less damage than the Shock that would have been inflicted on a miss.

## Combat Maneuvers

### Shoving

To knock a target down or push them into an adjacent square, the attacker must first succeed on an [Attack Roll](#attack-rolls). Instead of dealing damage, the attacker then rolls an opposed STR/[Brawl](/rules#brawl) or STR/[Exert](/rules#exert) check. If the attacker succeeds, the target is either knocked prone or forced into an adjacent square.

### Grappling

To grapple a foe, the attacker must first succeed with an unarmed [Attack Roll](#attack-rolls). Instead of dealing damage, the attacker makes an opposed STR/[Brawl](/rules#brawl) check. If the attacker wins, the defender becomes grappled and remains so until released or until they spend a [Main Action](#main-action) and succeed in a new opposed check. An attacker can only grapple one target at a time, though multiple attackers can grapple the same defender. In such cases, the defender’s single skill check is compared against all grapplers.

While grappling, neither the attacker nor the defender can move from their current location, nor can they use anything but unarmed attacks. At the end of each round in which the defender remains grappled, they take damage as if hit by an unarmed attack from each foe grappling them.

If the attacker wishes to move the target, they must spend a [Main Action](#main-action) and succeed in an opposed STR/[Brawl](/rules#brawl) check. If successful, the attacker can either move the target 10 feet with them or throw the target 5 feet and knock them prone. If the check fails, the defender breaks free.

These rules assume both targets are man-sized. Grappling or shoving significantly larger humanoid targets incurs a -2 penalty on all skill checks for the attacker. Attempting this against creatures only barely plausible for such manhandling incurs a -4 penalty.

### Dual Wielding Weapons

Some attackers prefer to use two weapons simultaneously. Characters who wish to dual-wield must have at least level 1 in the relevant weapon skills, such as [Stab](/rules#stab)-1 for a mace and sword.

When making an attack while dual-wielding, the attacker selects which weapon to use and rolls the attack accordingly. On a hit, the attack deals +2 damage as long as the target is within range of both wielded weapons. This bonus does not apply to Shock damage.

Managing two weapons is difficult and imposes a -1 penalty to all attack rolls.

### Execution Attacks

A target completely unsuspecting of danger is vulnerable to execution attacks.

A **ranged execution attack** requires one full minute of aiming, waiting, and adjusting. Any disturbance during this time spoils the shot. After spending this time, the attacker may make a DEX/[Shoot](/rules#shoot) check. The attacker adds a +4 bonus if the target is within 10 feet, or +2 if within the weapon’s normal range. On a success, the attack hits and ignores the victim’s AC.

A **melee execution attack** requires one full minute of proximity to the target, watching for an opening and getting within melee range. After this, the attacker may make a melee attack, automatically hitting.

When a target is hit by an execution attack, they must make a [Physical](/rules#physical) saving throw with a penalty equal to the attacker’s combat skill. On a failure, they are immediately reduced to zero HP and become [Mortally Injured](/rules#mortal-injury-and-stabalization).

If they succeed on the save, they still take maximum damage from the hit.

## Morale

Almost all creatures (especially [Henchmen](/equipment#henchmen)) prioritize their own survival. Exceptions include undead, constructs, religious zealots, and highly militarized beings. Food, wealth, power, territory, and offspring can all be regained, but life cannot.

These beings only fight to the death if they estimate it as their *best chance of survival*. To represent this:

- Individuals should retreat after losing half of their HP *unless they believe retreating won’t save them*.
- Groups should retreat after losing 1/3 of their starting numbers (to death or retreat) *unless* they’re still clearly winning.

They may flee for now, but they will likely *return* later.

The Party may choose to give [chase](/rules#chases-and-pursuit).

## Summary

That's it for combat! After reading this chapter, the reader should understand the main combat flow:

1. A surprise round occurs if one side sets an ambush.
2. Initiative is rolled *once*. The winners act first, and the sides alternate turns until combat concludes.
3. During a side's turn, each combatant can use one [Move](#move-action) (usually to move 30 feet), one [Main](#main-action) (usually to attack or cast a spell), and as many [Free Actions](#free-action) as the GM deems plausible.
4. The battle ends when one side is defeated (either through death or retreat).

Tactically minded players should pay special attention to:

- [Make a Snap Attack](/combat#make-a-snap-attack-instant): Use this to disrupt an enemy spellcaster or finish off a low-health foe before they attack you, especially if you have [Veteran's Luck](/classes#class-ability-veterans-luck) or high [Shock](#shock) damage.
- [Screen an Ally](#screen-an-ally-move): Use this to protect a high-damage, low-survivability ally, or serve as a Mage’s bodyguard against spell disruption.
- [Total Defense](/combat#total-defense-instant): This is especially useful when your side has more combatants. For example, if 3 players are fighting a huge Troll and one player uses their main action to negate the Troll’s action, the Troll and that player effectively do nothing, while the other two players can whittle the Troll down. Total Defense is even more useful if your side *lost* initiative, since you'd always have your Main action during the opponent's turn. If your side *won* initiative, you can achieve a similar effect with [Hold An Action](/combat#hold-an-action-move).
