---
layout: default
title: Home
---

# Combat

## The Grid

Combat takes place on a 1" = 5' grid. I recommend making [icons](https://youtu.be/LBZPi4oKlCQ?si=uC8io8mRS8oR57S7) (I use [these WoW class icons](https://dribbble.com/shots/6175355-World-of-Warcraft-Vector-Class-Icons)) for the Delvers and numbered [meeples](https://www.amazon.com/dp/B07BZ36NYJ) for enemies, choosing a different color for each enemy type.

The grid helps us disambiguate a few situations:

- Allies can move through each other so long as they do not end their movement in an unoccupied square.
- A character can not move through a standing enemy. [Shove](#shoving) (or kill) them to get by. Creatures 8x bigger (in any dimension) than their enemies instead treat enemies as [difficult terrain](#difficult-terrain).
- A two squares are considered adjacent if they share an edge or corner (diagonals are adjacent).
- Movement is done in 5' adjacent increments. This allows characters to move a greater distance diagonally than in a cardinal direction (in a [cartesian sense](https://en.wikipedia.org/wiki/Cartesian_coordinate_system)), but the decreased book-keeping is worth the loss of realism.
- Abilities that have a radius create a square on the grid where each side of the square has a length of twice the radius. For example, [Magic Bomb](/spells#magic-bomb) creates 20' radius explosion. On the grid, this is an 8x8 square.
- Some squares are <strong id="difficult-terrain">Difficult Terrain</strong>, requiring 10' of movement to enter. Others (like where walls are) are impassible.

### Line of Sight and Cover

Alice has <strong id="line-of-sight">Line of Sight</strong> to Bob if a line can be drawn from any point in Alice's 5' *cube* to any point in Bob's cube without passing through a solid object (like a wall, not another character).

Alice <strong id="half-cover">half cover</strong> from Bob if Bob has line of sight, but does not have line of sight to *all* of the corners of Alice's cube.

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

Alice has <strong id="full cover">full cover</strong> from Bob if Bob has line of sight, but does not have line of sight to *any* of the corners of Alice's cube. This is usually the case when shooting through windows or [arrow slits](https://en.wikipedia.org/wiki/Arrowslit).

## Combat Sequence

Each participating side rolls 1d8, with the player's side adding the highest DEX from among their Delvers. Starting with the side with the highest roll, each member of that side takes all of their actions in whatever order they'd like. Once every member of a side has acted, the next highest side repeats the process. This repeats until all sides have acted, and then begins from the top in the same order. Initiative is not re-rolled.

## Surprise

If a group is caught entirely unawares they may suffer surprise, granting their enemies a full free round of action before initiative is rolled. The GM decides when surprise applies, possibly calling for an opposed DEX/[Sneak](/rules#sneak) (for a stealthy approach) skill check or STR/[Exert](/rules#exert) (to kick a door in) versus the target’s WIS/[Notice](/rules#notice).

Groups cannot be surprised if they are actively anticipating the possibility of combat. Delvers moving carefully through a dungeon are not surprised unless the enemy is specifically Hidden.

## Combat Action Types

Attacks, movement, spellcasting, and other combat activities all require one of the following four types of actions.

<strong id="main-action">Main Actions</strong> are a character’s primary action during a combat round, such as attacking an enemy, applying first aid to a downed ally, casting a spell, frantically evading incoming spears, or something else that takes less than ten seconds to do. A combatant gets one Main action per round.

<strong id="move-action">Move Actions</strong> involve moving the character’s normal movement rate of 30 feet or performing some other relatively brief bodily action, such as getting up from prone. A combatant gets one Move Action per round, but can spend their main action to get a second.

<strong id="free-action">Free Actions</strong> are brief, simple acts that require only a moment’s concentration. Activating certain abilities or speaking a few words might constitute a [Free Action](#free-action). A combatant can take as many [Free Action](#free-action)s on their round as the GM finds plausible.

<strong id="instant-action">Instant Actions</strong> are special, most being provided only by certain powers or certain special actions. Instant Actions can be performed even when it’s not your turn in the round, even after the dice have already been rolled. The Veteran’s Luck class ability provides one such Instant Action, allowing the Delver to treat a missed attack roll as an automatic hit. A combatant can use as many Instant Actions in a round as the GM finds plausible. Instant Actions performed at the same time are resolved simultaneously, with the GM adjudicating any ambiguities.

Many actions (like [Run](/combat#run-move) and [Stand Up](/combat#stand-up-move)) allow any adjacent foes armed with a melee weapon to make a free <strong id="attack-of-opportunity">Attack of Opportunity</strong>. To avoid this, either do not be in melee range or use the [Disengage](/combat#disengage-main) action first.

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

This list is not exhaustive! If you want to do something else, or a variant of any of these actions, describe what you're doing and what you are hoping to have happen, and the GM will figure out the specifics - see [the core gameplay loop](/rules#core-gameplay-loop). Normally, this involves figuring out which sort of action it takes (main, move, free, etc), whether or not it provokes an attack of opportunity, etc.

### Make a Melee Attack (Main)

Attack a target in melee range with an unarmed attack or melee weapon. Such weapons use either the [Brawl](/rules#brawl) or the [Stab](/rules#stab) skill, depending on the type of attack.

### Make a Ranged Attack (Main)

Attack a target with a bow or thrown weapon. The [Shoot](/rules#shoot) skill is used for these attacks, though [Stab](/rules#stab) or [Exert](/rules#exert) can optionally be used for thrown weapons. If there is an enemy attacker in melee range, one-handed ranged weapons and thrown weapons suffer a -4 penalty to hit, while bows and other two-handed ranged weapons cannot be fired at all.

### Make a Snap Attack (Instant)

As an [Instant Action](#instant-action), give up your [Main Action](#main-action) and either Make a Melee Attack or Make a Ranged Attack at a -4 penalty to hit. As an [Instant Action](#instant-action), you can Make a Snap Attack even when it’s not your turn, but you must not have taken your [Main Action](#main-action) this round yet. Only well-trained and disciplined NPCs have enough focus to Make a Snap Attack.

Since Snap Attack is an [Instant Action](#instant-action), you can use it to interrupt a spell, or kill a foe *after* they have hit but *before* damage has been rolled in order to prevent that damage.

### Make a Swarm Attack (Main)

Target an enemy within range of your weapon and take this action until up to four allies have Made a Swarm Attack on that target this round. At that point or any point beforehand, one of these assailants can Make a Melee Attack or Make a Ranged Attack on the target with a +2 bonus to hit and +1 bonus to damage for every other assailant, up to a maximum bonus of +6 to hit and +3 damage. This bonus damage does not add to the attack’s Shock and cannot make it do more than its usual maximum damage. Any Shock inflicted by this attack is always applicable, however, even if the target’s AC is too high, they’re using a shield, or have some power that makes them immune to Shock; the damage a Swarm Attack does isn’t really Shock, but a reflection of the inevitable hazards of being swarmed by numerous armed foes.

### Charge (Special)

Spend both your [Main Action](#main-action) and your [Move Action](#move-action) to move up to twice your normal movement rate in a straight line, making a melee or thrown ranged attack at the end of it with a +2 bonus to hit. You must be able to charge at least 5' to build up sufficient momentum and you suffer a -2 penalty to your AC until the end of the round.

If you start your movement adjacent to an armed melee combatant, they get a free melee attack against you as you flee. To avoid this, you must Disengage first.

### Screen an Ally (Move)

Move up to your normal movement rate to get adjacent to an ally. You then physically block attacks against them until the start of your next turn, provided they remain within 5 ft of you. Enemies who attack your ward must make a successful opposed combat skill check against you using either STR or DEX and the most applicable combat skill.

If the enemy succeeds, their attack targets your ward normally. If you succeed, their attack instead targets you. You can screen against a number of attackers each round equal to your highest combat skill; thus, you need at least level 1 in a combat skill to successfully screen.

Multiple defenders can screen the same target, in which case the opposed skill check is compared to all defenders and targets the worst-rolling successful defender. You can only screen against attacks you could feasibly physically parry or body-block.

If you moved and started your movement adjacent to an armed melee combatant, they get a free melee attack against. To avoid this, you must Disengage first.

Screen an Ally may be used to protect ranged allies (especially spellcasters) from ranged attacks.

### Total Defense (Instant)

Give up your [Main Action](#main-action) to focus entirely on dodging and evading incoming perils. Your AC increases by 2 and you become immune to Shock until the start of your next turn, including the otherwise-unavoidable damage from a Swarm Attack. You cannot take this action if you have already spent your [Main Action](#main-action) for the round.

Since Total Defense is an [Instant Action](#instant-action), you may use it *after* you see the result of an attack roll against you.

### Run (Move)

Move your normal movement rate in combat, which is 30 feet for an ordinary human. If you start your movement adjacent to an armed melee combatant, they get a free melee attack against you as you flee. To avoid this, you must Disengage first.

### Disengage (Main)

Disengage from an adjacent melee attacker, allowing you to move away from them without incurring a free attack as you retreat. You do not actually leave melee range with this action alone, and your enemy can simply re-engage you next round if you don’t move away.

### Use a Skill (Main)

Perform first aid on a downed comrade, cry out an appeal for parley, or otherwise use a skill that wouldn’t normally take more than six seconds.

If you attempt to use a skill while adjacent to an armed melee combatant, they get a free melee attack against you.

### Ready or Stow an Item (Main)

A character can Ready an item for use from their pack or stowage or Stow it, as per the encumbrance rules. Sheathing or holstering a Readied weapon without actually Stowing it does not require this action, though the GM may disallow rapid weapon swaps if they start to become implausible.

### Reload a Weapon (Main)

Reload a crossbow from a Readied case of quarrels. Bows and crossbows may be reloaded as a [Free Action](#free-action) if the shooter has at least [Shoot](/rules#shoot)-1 skill; otherwise it’s a [Move Action](#move-action) to nock a new arrow in a bow.

### Pick up an Item (Move)

Scoop up a dropped item within melee range, leaving it Readied in your hand.

If you attempt to pick up an item while adjacent to an armed melee combatant, they get a free melee attack against you. To avoid this, you must Disengage first.

### Stand Up (Move)

Rise from a prone position, picking up any dropped items as you do so.

If you stand up adjacent to an armed melee combatant, they get a free melee attack against you. To avoid this, you must Disengage first.

### Go Prone (Free)

Fall prone, applying a -2 penalty to ranged attacks against you and a +2 bonus to melee-range attacks against you. Your normal movement rate is halved while you remain prone.

### Hold An Action (Move)

Spend your [Move Action](#move-action) to delay acting on your side’s turn. You may trigger the rest of your turn’s actions as an [Instant Action](#instant-action) at any point until the end of the round, after which they are lost. If your held action is taken in response to someone else’s action, yours resolves first.

## Combat Attack Rolls

When an assailant makes an attack, they roll 1d20 and add their attack bonus, the weapon’s relevant attribute modifier, their relevant combat skill level, and any magical bonuses from their weapon. If the total is equal or greater than the target’s relevant AC, they hit. If less, they miss.

Every weapon listed in the equipment section is listed as using one or more attributes, such as either STR or DEX for a dagger. The attacker may choose either attribute for modifying the weapon’s attack and damage rolls.

NPCs usually do not have attribute modifiers or skill levels. Instead, the attack bonus of a trained NPC combatant is usually equal to their HD, often with an additional bonus to reflect particularly good training or talent.

Some common situations modify an attack roll, granting a bonus or penalty. GMs may add others depending on the situation.

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

If an attack hits, it inflicts HP damage equal to the weapon’s damage die plus the weapon’s relevant attribute modifier. Class Abilities (like [Killing Blow](/classes#class-ability-killing-blow)), Feats (like [Armsmaster](/feats#armsmaster-c)), and magic weapon enchantments increase this damage.

If you are making a purely unarmed attack add your [Brawl](/rules#brawl) skill to the damage.

If the result is less than your Shock damage, inflict that much instead.

## Shock

Some melee weapons inflict Shock on a missed attack roll. This damage reflects the inevitable harm a poorly-armored combatant suffers when engaging in armed combat. Shock for a weapon is recorded as a point value and target AC, such as “Shock 2/15”. If the wielder misses a target with this weapon that has a AC equal or less than the weapon’s Shock rating, they suffer the listed amount of damage anyway. Thus, if that weapon were to miss a victim with Melee AC 13, it would still do 2 points of damage.

Some attacks apply Shock on a miss regardless of the target’s AC. This benefit may be granted by certain abilities (like [Armsmaster](/feats#armsmaster-c)), or it be part of a dangerous NPC’s talents. Such Shock ratings are recorded with “-” as the affected AC, such as “Shock 5/-”. This automatic Shock is still negated by shields or abilities that grant a subject immunity to Shock.

The only modifiers that add to Shock damage are the wielder’s relevant attribute modifier for the weapon and any damage bonuses that explicitly add to Shock.

A person using a shield ignores the first source of Shock they would normally suffer in a round. Some other Feats or special actions such as Total Defense can also render a subject immune to Shock.

An attack that hits never does less damage than the Shock that would have been inflicted on a miss.

## Combat Maneuvers

### Shoving

To knock a target down or force them into an adjacent square, the attacker needs a successful attack roll. Then, in lieu of damage, roll an opposed STR/[Brawl](/rules#brawl) or STR/[Exert](/rules#exert) skill check. If the attacker succeeds, the target is forced into an adjacent square or knocked prone.

### Grappling

To grapple a foe, the attacker must first hit with an unarmed attack. In lieu of damage, make opposed STR/[Brawl](/rules#brawl) skill checks. If the attacker wins, the defender is grappled and remains that way until released or until they spend a [Main Action](#main-action) and succeed in a new opposed check. An attacker can grapple only one target at a time, though multiple attackers can cling to the same luckless defender. In such cases, the defender’s single skill check is compared against all of their foes.

While grappling, neither attackers or defenders can move from their current location, nor can they fight with anything but unarmed attacks. At the end of each round in which a defender remains grappled, they suffer damage from each attacker as if hit with an unarmed attack from each foe grappling them.

If the attacker wishes to move the target, they must spend a [Main Action](#main-action) and succeed in an opposed STR/[Brawl](/rules#brawl) skill check. If they win, the target is either moved ten feet along with them, or thrown five feet and knocked prone. If they lose, the defender breaks free.

These rules assume both targets are man-sized. Grappling or shoving significantly larger but still humanoid targets is done at a -2 penalty on all skill checks by the attacker. Doing so to creatures only barely plausible for such manhandling is done at a -4 skill check penalty.

### Dual Wielding Weapons

Some attackers prefer to use two weapons at once. Delvers who wish to do so must have at least level 1 in the relevant weapon skills, such as [Stab](/rules#stab)-1 and [Shoot](/rules#shoot)-1 for dual-wielding a knife and hand crossbow.

When making an attack while dual-wielding, the attacker chooses which weapon they wish to use, rolling the attack roll accordingly. On a hit, the weapon does +2 damage so long as the target is within range of both wielded weapons. This bonus does not add to Shock.

Managing two weapons at once is difficult, and applies a -1 penalty to all attack rolls.

### Execution Attacks

A target that is entirely unsuspecting of danger is subject to execution attacks. A subject that is expecting danger or alert to potential harm cannot be targeted by an execution attack.

A ranged execution attack requires one full minute of aiming, waiting, and adjusting. Any disturbance during this time will spoil the shot. After spending this time, the assassin may make a DEX/[Shoot](/rules#shoot) skill check. The DC is 6 for an attack within 10', 8 for an attack within the weapon’s normal range, or 10 for one at the weapon’s long range. On a success, the attack hits; the victim’s AC is ignored.

A melee execution attack requires one full minute of near proximity to the target, watching for just the right opening and getting to within melee range of the victim. If this time is granted, the assassin may make a melee attack, automatically hitting.

When a target is hit with an execution attack they must make a Physical saving throw at a penalty equal to the assailant’s combat skill. On a failure, they are immediately reduced to zero HP and Mortally Injured, or knocked unconscious if the weapon was non-lethal.

If they succeed on the save, they still take maximum damage from the hit.

## Morale

Almost everything (especially [Henchmen](/equipment#henchmen)) prioritizes its own survival (undead, constructs, religious zealots, and extremely militarized creatures are notable exceptions). More food can be found, more wealth can be acquired, power can be regained, territory can be reclaimed, and more children can be made.

The only time such beings should fight to the death is if they estimate that doing so is their *best shot at living*. To represent this:

- Individuals should retreat after losing half of their HP *unless they clearly won't die*.
- Groups should retreat after losing 1/3rd of their starting numbers (to death or retreat) *unless* they're still clearly winning.

They're gone for now, but they will probably be *back*.

The Delvers may wish to give [chase](#chases-and-pursuit).
