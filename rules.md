---
layout: default
title: Home
---

# Rules

## The Big Picture

1. The Game Master (GM) creates a loosely defined fantasy setting where most adventures that they would want to run fits in somewhere.
2. The GM proposes a few adventures (describing them in vague strokes) to the players between sessions, the players pick the one they want to run next, and the GM prepares that adventure, using [hard framing](https://thealexandrian.net/wordpress/31509/roleplaying-games/the-art-of-pacing) to place the Delvers right on the adventure's doorstep with a strong hook.
3. After an adventure is completed, the process repeats from step 2, usually with the same Delvers. Weeks or months pass in-game between adventures as appropriate.

This is *very much* a game about playing all of the wonderful [adventures](/#recommended-adventures) that the [community](https://campaignwiki.org/osr/) has to offer. To that end, Sovereign attempts to strip out and de-emphasize anything that might entice the players *away* from the pre-written content in adventures. Domain play, crafting, etc have all be deliberately removed.

Finally, the episodic natures of the adventures facilitates players joining and leaving the table, and allows for players to easily introduce new Delvers as their old ones die, retire, or recover. We want everyone playing as smoothly as possible!

## Core Gameplay Loop

Sovereign is played with one GM and at most 8 players, playing as 4 to 8 Delvers, venturing into dark dungeons, corrupt mansions, and wizard towers for fun and profit. The game is, predominately, a conversation, but that conversation has *structure*:

1. The GM describes a situation to the players, making sure to not assume actions from the players, paying special attention to what they see, hear, and smell. Then, they ask "What do you do?"
2. The players clarify or describe their actions and the *intent* behind their actions. When acting as a group (such as picking the next room to explore), elect one person to speak for the group to reduce chaos.
3. The GM informs the players how likely their actions are to accomplish their intent (taking into account the situation, their [Attributes](#attributes), and their [Skills](#skills)), what happens if they fail, and how much it costs them to try. Actions that have no chance to fail, have no consequences for failure and no appreciable cost to attempt *just happen*. [Skill checks](#skill-checks) are a useful way come up with likelihood, but the GM is free to come up with probabilities directly, like 1-in-6 or 45%.
4. If the players find the ruling to be reasonable, the dice are rolled and we honor the stakes. If they *don't*, they negotiate or come up with a better plan. Typical levers are higher chances of success for less impactful results, worse consequences for failure, or higher costs to attempt and vice versa.
5. This creates a new situation. The GM [fast forwards](https://thealexandrian.net/wordpress/31509/roleplaying-games/the-art-of-pacing) to the next meaningful decision, narrating the transition and repeats the process.

That's the *whole* game. All other rules exist to either faciliate interesting decisions for #2, help the GM determine #3, or ease the negotiation in #4. If you find a rule *isn't* doing any of these things, change or remove it.

### Narrative Interaction

Much of the intresting part (and what separates skilled players from novice players) of exploring is coming up with a plan that *avoids* rolling. A plan that triggers a skill check or roll is *workable*, but also *risky*. A lot of the fun in this play style is coming up with plans that *can't fail*.

Consider being faced with a deep, 15-foot wide spiked pit. Dangerous. If a player wants to leap to the other side, the GM might rule that as a DC 8 STR/[Exert](#exert) [check](#skill-checks) with failure resulting in taking `3d6` [damage](#damage) from the fall and spikes as well as being stuck at the bottom.

A clever player might think to *fill up the pit*. Perhaps they spend some time dragging coffins, furniture, etc into the pit so that they can lower themselves down, walk across, and climb up the other side without rolling.

Searching for stuff works the same way - the GM will describe a new room to the players, but *won't* assume that they touched anything (since it could be hazardous). A player can say "I search the room", and lean on their character's WIS/Notice, potentially triggering traps.

Better is for the player to specify *what* and *how* they're searching. If their method (which usually has a time-cost measured in [Turns](#keeping-track-of-time)) would find the hidden thing (whether a trap, treasure, or clue), they *just do*.

## Attributes

A Delver has five attributes ranging from 3 to 18, reflecting a range from the minimum viable capacity for a playable character to the maximum normal human level.

Three of these attributes are physical.

**Strength**, reflecting physical prowess, melee combat, carrying gear, and brute force. Influences melee [attack rolls](/combat#combat-attack-rolls), melee [damage](/combat#damage), [encumbrance](/rules#encumbrance), and [Physical](/rules#physical) [Saving Throws](#saving-throws).

**Dexterity**, reflecting speed, evasion, manual dexterity, reaction time, and combat initiative. Influences attack rolls with ranged weapons and some melee weapons, [AC](/equipment#armor-class), and [Evasion](#evasion) Saving Throws.

**Constitution**, reflecting hardiness, enduring injury, and tolerating large amounts of magical healing. Influences [HP](#hit-points) and Physical Saving Throws.

Two are mental attributes.

**Intelligence**, reflecting memory, reasoning, technical skills, and general education. Influences Effort for most Arcane Traditions, Evasion and [Mental](#mental) Saving Throws, and the efficacy of some spells.

**Wisdom**, reflecting noticing things, making judgments, reading situations, and intuition. Influences Mental Saving Throws.

### Attribute Modifiers

Each attribute has a modifier, ranging from -2 to +2 based on its score. This modifier is added to skill checks, attack rolls, [damage](#damage) rolls, [Shock](#shock) damage, and the relevant [saving throw](#saving-throws) targets.

| Attribute | Modifier |
| --------- | -------- |
| 3         | -2       |
| 4-7       | -1       |
| 8-13      | 0        |
| 14-17     | +1       |
| 18        | +2       |

In this text, when referring to an attribute's score, it will be spelled completely, like Strength. When referring to an attribute's modifier, it will be abbreviated to three letters: STR, DEX, CON, INT, or WIS.

If an injury, character advancements, or magic item alters an attribute, immediately update the attribute’s modifier.

## Hit Points

A character’s hit points (HP) measure their distance from death. If a character is reduced to zero HP, they are [dying](#mortal-injury-and-stabalization). Taking <strong id="damage">damage</strong> reduces a character's HP. For instance, when a character with 11 HP takes 5 damage, they would have 6 HP remaining.

A new character rolls the [HP Progression](/rules#hp-progression) for their [Class](/classes) for the maximum HP, adding their Con. If they have chosen the [Die Hard](/feats#die-hard-c) Feat they add +2 to the roll. The final value for a given die cannot be less than 1 HP.

A character gains maximum HP as they advance in character level, re-rolling their prior levels and taking the new score if it’s higher, as explained in [advancement](#advancement-benefits).

NPCs roll a number of d8's for thier HP equal to their Hit Dice (HD).

## Saving Throws

Saving throws are rolled to resist some unusual danger or chance hazard. To make a saving throw, a person rolls `1d20` and tries to get equal or higher than their saving throw target. Sometimes a save might have bonuses or penalties applied to the roll, but a natural roll of 1 on the die always fails the save, and a natural roll of 20 is always a success.

There are three types of saving throws. Usually it will be obvious which type is most appropriate for a threat, but the GM makes the call.

<strong id="physical">Physical</strong> saves resist exhaustion, poisons, diseases, or other bodily afflictions. A Delver's Physical saving throw target is equal to 16 minus their character level and the highest of their STR or CON.

<strong id="evasion">Evasion</strong> saves apply when dodging explosions, avoiding traps, reacting to sudden peril, or other occasions where speed is of the essence. A Delver’s Evasion saving throw target is equal to 16 minus their character level and the highest of their DEX or INT.

<strong id="mental">Mental</strong> saves apply when resisting mental attacks, insubstantial magic spells, psychological trauma, and other mental hazards. A Delver’s Mental saving throw target is equal to 16 minus their character level and the highest of their INT or WIS.

NPCs have a single saving throw target equal to 15 minus half their rounded-down HD. Thus, an NPC with 3 HD would have a saving throw target of 14+ for any particular hazard.

## Skills

A Delver’s skills reprsent their training. A newly-created Delver starts with a few trained skills and [gain more](#advancement-benefits) as the Delver [advances](#advancement) in level.

### Interpretting Skill Levels

Skills are rated on a scale from -1 to 4. Level -1 represents an absence of training. Level 0 represents basic competence. Level 1 represents professional-level skill. Level 2 in a skill likely makes a character the best in a village or city block. Level 3 represents mastery, and likely makes the character one of the best in a city. Level 4 represents world-class skill.

This text refers to to skills and their level compactly like {Skill}-{Level}. For instance [Exert](#exert)-1 or [Heal](#heal)-2.

All skills start at level -1.

### The Skill List

Skills may overlap in their application; the character may use either skill at their discretion.

- <strong id="exert">Exert</strong>: Run, swim, climb, jump, labor for long periods, throw things, or otherwise exert your physical strength, stamina, and coordination. Even a Delver with poor physical attributes might have a good Exert skill reflecting athletic training and expertise in making the most of their available talents.
- <strong id="heal">Heal</strong>: Treat wounds, cure diseases, neutralize poisons, diagnose psychological health issues, and otherwise tend to the wounds of body and mind.
- <strong id="know">Know</strong>: Know matters of history, geography, natural science, zoology, and other academic fields appropriate to a sage or scholar. While some sages might specialize in particular fields, most learned folks have a broad range of understanding, and will rarely be unable to even attempt to answer a question relevant to this skill.
- <strong id="magic">Magic</strong>: Cast or analyze magic and know things about famous mages or notable magical events. Classes that can’t cast spells obtain only intellectual and scholarly benefits from this skill.
- <strong id="notice">Notice</strong>: Notice small details, impending ambushes, hidden features, or concealed objects. Detect subtle smells, sounds, or other sensory input.
- <strong id="sneak">Sneak</strong>: Move silently, hide in shadows, avoid notice, pick pockets, disguise yourself, pick locks, disable traps, etc.


- <strong id="brawl">Brawl</strong>: Fight unarmed or with natural body weaponry. Punch, kick, grapple, or otherwise brawl without the benefit of man-made tools. This mode of fighting is inefficient at best without a Feat to improve it, but it’s reliably non-lethal.
- <strong id="shoot">Shoot</strong>: Fire a bow or crossbow or throw a hurled weapon. Maintain ranged weaponry and fletch arrows.
- <strong id="stab">Stab</strong>: Fight with melee weapons or throw a hurled weapon. Maintain and identify weaponry.

### Skill Checks

Most Delvers are skilled, competent folks who are perfectly capable of carrying out the ordinary duties of their role. Sometimes, however, they are faced with a situation or challenge beyond the usual scope of their role and the GM calls for a skill check.

To make a skill check, roll `2d and add the most relevant skill level and [attribute modifier](#attribute-modifiers) (denoted as {Attribute Modifier}/{Skill}, like STR/[Exert](#exert) or INT/Magic). If the total is equal or higher than the check’s <strong id="difficulty-class">Difficulty Class</strong> (DC), the check is a success. On a failure, the Delver either can’t accomplish the feat at all, bad luck cheats them, or they achieve it at the cost of some further complication. The GM determines the specific consequence of a failure.

To express to this compactly, we write DC {Difficulty Class} {Attribute Modifier/Skill}. For example, DC 8 INT/[Know](#know) or DC 12 DEX/[Heal](#heal).

The GM is always the one who calls for a skill check, and they do so at their discretion. The player simply describes what their Delver is attempting to do, and the GM will tell them what skill and attribute combination to roll. If multiple skills or attributes might plausibly fit the action, the player picks.

| Difficulty | Skill Check                                                                                                                                   |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| 6          | A relatively simple task that is still more than the PC would usually be expected to manage in their regular background. Anything easier than this isn’t worth a skill check. |
| 8          | A significant challenge to a competent professional that they’d still succeed at more often than not.                                                                                |
| 10         | Something too difficult to be expected of anyone but a skilled expert, and even they might fail.                                                                                      |
| 12         | Only a true master could expect to carry this off with any degree of reliability.                                                                                                     |
| 14+        | Only a true master has any chance of achieving this at all, and even they will probably fail.                                                                                         |

### NPC Skill Checks

When an NPC needs to make a skill check, they roll `2d and add their listed skill modifier if their action is something they ought reasonably to be good at. If it isn’t, they roll at +0, or even at -1 if it seems like something they’d be particularly bad at doing. If the NPC is special enough to have actual attribute scores and skill levels, they use those instead.

### Group Checks

When multiple Delvers face a situation together, they elect one to make the roll. For each other Delver with a positive modifier, add 1 to the roll. For each delver with a negative modifier, subtract 1.

This represents forcing open a heavy door together, everyone trying to stealth past a guard, or collectively climbing a cliff face.

### Opposed Skill Checks

When skills oppose each other, the side attempting to change the situation rolls a skill check vs a [DC](#difficulty-class) of 8 plus the other side's modifier. For example, a Delver trying to sneak past a guard might roll `2d plus their DEX/[Sneak](/rules#sneak) against a DC of 8 + the guard’s skill modifier. If the guard is significant enough to have attributes and skill levels, it might be a `2d+DEX/[Sneak](/rules#sneak) against a DC of 8+WIS/[Notice](#notice). We write this compactly as DEX/[Sneak](/rules#sneak) vs WIS/[Notice](#notice).

## Keeping Track of Time

A <strong id="turn">Turn</strong> is a time measurement used to determine how often certain abilities or actions can be taken. Some powers can be triggered only so many times per Turn, while some special abilities only work once per Turn.

A Turn is one particular fight, event, activity, or effort that doesn’t take more than ten or fifteen minutes. A fight takes a Turn. A chase takes a Turn. A tense backroom negotiation takes a Turn. So long as the party is doing the same general activity in the same general location, it’s probably one Turn.

Combat is made up of <strong id="round">Rounds</strong>, each one lasting approximately ten seconds. A single combat may involve multiple Rounds of action, but always takes a Turn. A round begins with the actions of the side that wins initiative and ends after the actions of the side with the lowest initiative.

Between adventures or in safe places, time passes naturally, usually counted in either hours, days, or weeks as appropriate.

## Injury, Healing, and System Strain

Injury is almost inevitable in an adventurer’s career. Some forms of it are longer-lasting than others.

### Mortal Injury and Stabalization

When a Delver is reduced to zero HP from taking [damage](#damage), they are Mortally Injured. They will die at the end of the sixth [Round](#round) after their incapacitation unless stabilized by an ally or some special ability. A Mortally Injured character is helpless, takes no actions, and does nothing useful.

Stabilizing an ally is a [Main Action](/combat#main-action) that requires a DEX/[Heal](#heal) or INT/[Heal](#heal) [skill check](#skill-checks) with a DC of 8 plus the number of full [Rounds](#round) since the target fell. If the medic lacks a [healer’s kit](/equipment#healers-kit), this difficulty is increased by 2. Only one ally can try to stabilize a victim per round, though others can attempt to aid their check (via a [group check](#group-checks)). Attempts may be retried each round for as long as hope lasts.

Once stabilized, the victim remains incapacitated for one [Turn](#turn) before recovering with 1 HP and the [Frail](#frail) condition.

NPCs who aren’t important enough to merit a name die instantly when reduced to zero HP.

### Frail

Creatures who reach 0 HP and then recover are Frail.

A Frail character acts normally, but if reduced to 0 HP again, they die instantly. Frail characters do not recover HP through [Natural Healing](#natural-healing).

Frailty is removed with a week of bed rest and medical attention by someone with a [healer’s kit](/equipment#healers-kit) and at least [Heal](#heal)-0 skill. In addition, someone with at least [Heal](#heal)-1 can make one attempt to remove Frailty with a healer's kit, an hour of labor, and a successful DC 10 DEX/[Heal](#heal) or INT/[Heal](#heal) check.

Frail characters without this level of medical care must make a [Physical](#physical) save after a week; on a failure they die `1d6` days later, while success means they lose their Frailty after another month’s rest.

### Natural Healing

A wounded creature recovers HP by getting a good night’s rest and adequate food. Provided they are warm, fed, and comfortable, they regain HP each morning equal to their experience level, or equal to their HD if they are NPCs.

Delvers are *not* confortable while sleeping in tents, outdoors, etc. It has to be a honest *bed*.

[Frail](#frail) creatures do not recover HP through natural healing.

### First Aid

Healers can patch up victims in a hurry at a cost to their physical resilience. By spending one minute patching up an ally with a [healer’s kit](/equipment#healers-kit), heal `1d6`+[Heal](#heal) points of damage. Each such application adds one [System Strain](#system-strain) to the target. First aid restores HP to a [Frail](#frail) target, but it cannot remove their Frailty.

One [Turn](#turn) is enough time for a healer to apply as much first aid as is wanted to the rest of their party.

### System Strain

Magical forms of healing (like [Healing Touch](/arcane-traditions#healing-touch)), use of powerful augmenting magic (like [Haste](/spells#haste)), and [First Aid](#first-aid) can take a toll on a user’s physiology. Their System Strain total reflects the total amount of stress their body has undergone.

A healthy character starts at zero System Strain and has their Constitution as their maximum.

Magical healing and certain spells and abilities (like [Speed](/spells#speed)) will add to a subject’s System Strain. If this addition would put them over their maximum they cannot activate the spell, benefit from healing, or otherwise gain any use from the ability. If they are forced over the maximum by some unavoidable effect, they are instead knocked unconscious for an hour.

Characters lose one point of accumulated System Strain after each night’s rest, assuming they are warm, fed, comfortable, and get at least eight uninterrupted hours of sleep.

Delvers are *not* confortable while sleeping in tents, outdoors, etc. It has to be a honest *bed*.

## Poisons and Diseases

Most toxins force a victim to make a [Physical](#physical) saving throw to resist their effects or mitigate their harm. Weak perils might grant as much as a +4 to the saving throw, while dire threats might apply a -4 penalty.

If the save is failed, the poison or disease takes hold. Most poisons act quickly, inflicting damage, adding [System Strain](#system-strain) to the target, or applying long-lasting penalties. Diseases have a slower onset but often apply the same sort of harms.

A medic can treats a poisoned person within a minute of the poisoning with a [healer’s kit](/equipment#healers-kit) to give them a better chance to resist. They add twice their [Heal](#heal) skill level to the victim’s saving throw roll, or +1 if they have only [Heal](#heal)-0 skill.

Some poisons, like that of a [pit viper](https://basicfantasy.org/srd/monstersAll.html#snake-pit-viper), are save or die. Once the poison takes hold, the victim has `1d4` [Turns](/rules#turn) to live unless specified otherwise.

Other poisons can have other effects. A [giant centepede](https://oldschoolessentials.necroticgnome.com/srd/index.php/Centipede,_Giant) causes lethargy. A [Tarentella](https://oldschoolessentials.necroticgnome.com/srd/index.php/Spider,_Tarantella) causes `2d6` turns of painful jerking spasms.

## Chases and Pursuit

Delvers have a habit of chasing others and being chased.

If one group is faster than the other group, that group succeeds.

Otherwise, the pursuing group makes an [opposed](#opposed-skill-checks) [group](#group-checks) DEX/[Exert](/rules#exert) or Con/[Exert](#exert) [skill check](#skill-checks) vs the fleeing group's DEX/[Exert](#exert) or CON/[Exert](#exert) subject to the following modifiers:

| Situation                                        | Mod |
| ------------------------------------------------ | --- |
| There are more pursuers than pursued             | -1  |
| The pursued have no head start at all            | +2  |
| The pursued have one round's head start          | +1  |
| The pursued have less than a minute's head start | +0  |
| The pursued have more than a minute's head start | -2  |
| The pursuit is half-hearted or obligatory        | -1  |
| The pursuers are enraged or vengeful             | +1  |

On a success, the pursuing group catches up with the fleeing group, beginning combat if they'd like and automatically winning initiative, with the front-members in melee range of the rear members of the fleeing group.

## Encumbrance

Gear has encumbrance, measured in points and denoted `enc`, as exampled in the table below. The more awkward or bulky the object, the greater the encumbrance. The GM adjudicates ambiguous objects.

| Gear                                    | enc         |
| --------------------------------------- | ----------- |
| Portable in a small pocket              | 0           |
| Portable in one hand                    | 1           |
| Requires two hands to carry or use it   | 2           |
| Requires a whole-body effort to haul it | 5+          |
| Dragging an unconscious teammate        | 12          |

Gear is either Stowed or Readied.

<strong id="stowed">Stowed</strong> gear is packed away carefully in pockets, packs, and harnesses. It’s easier to carry but harder to quickly access. Using Stowed gear requires that the bearer take a [Main Action](/combat#main-action) to pull it out before using it. A character can carry a total number of Stowed encumbrance points equal to their Strength score.

<strong id="readied">Readied</strong> gear is carried in hands, holsters, quick-access pockets, or other easily-accessible places. It can be used as part of an action without any further preparation. A character can carry a number of Readied encumbrance points equal to half their Strength, rounded down.

### Bulk Weights

Sometimes the Delvers need to transport bulk amounts of goods that are measured in pounds. When it’s necessary to convert these weights into encumbrance points, assume that 50lbs is 10 enc.

Every 100 coins counts as 1 enc.

### Pack Animals and Porters

To haul more equipment and loot than the Delvers can carry, they need pack animals or porters.

| Type                      | Cost   | enc |
| ------------------------- | ------ | --- |
| Heavy pack horse          | 40g    | 30  |
| Mule or donkey            | 20g    | 15  |
| Porter                    | 2g/day | 12  |
| Cart (pulled by 2 beasts) | 25g    | 300 |

## Falling and Other Hazards
Some perils occur with some regularity for adventurers. A few of the most common are detailed here.

**Falling**: Most creatures will take `1d6` [damage](#damage) per 10 full feet they fall, up to `20d6` maximum. Spikes or other hazardous terrain at the bottom will add at least `1d6` to the total. A creature that intentionally leaps or skids down in a controlled way makes a DEX or STR/[Exert](#exert) [skill check](#skill-checks) at a difficulty of 7 + 1 for every 10 full feet; on a success, the effective distance fallen is halved.

**Suffocation**: Creatures fight or act normally without air for one [Round](#round) per point of Constitution, or 10 Rounds for most NPCs. If they don’t move, they quadruple this time. Once they run out of air, they must make a [Physical](#physical) save each Round or take 1 HP per HD or level they have.

**Starvation**: Each day of insufficient food (1 Ration) causes 1 [System Strain](#system-strain). If you already have maximum system strain, you die.

**Dehydration**: Each day of insufficient water (a waterskin's worth) causes 3 System Strain. If you already have maximum system strain, you die.

Starvation and Dehydration are ignored so long as the Delvers aren't trying to sleep in a dungeon. Assume that they find sufficient food in the wilderness.

## Overland Travel

Unless there is an *extremely* compelling reason to play it out, montage through the geography traveled and arrive at the destination. For time-tracking purposes, Delvers are able to travel ~18 miles/day.

## Dungeon Exploration

These rules are meant for tracking adventures in a dangerous site where perils could spring up at any moment. Not all Wandering Encounters are hostile (see [, but each is a risk of pointless fighting or sudden alarm.

At the start of each [Turn](#turn) after the party enters the site:

1. Roll a secret [Wandering Encounter](#wandering-encounters) check if necessary. On a 1, the encounter will happen at some appropriate moment this [Turn](/rules#turn).
2. The Delvers decide what they want to do this [Turn](/rules#turn): move into a new room, carefully search their current location, fiddle with some object they’ve found, or something else that takes ~ten minutes.
3. The GM explains the result of their actions, whether that’s a first-glance description of a new room, notice of the hideous abomination that’s rearing up before them, or the explosive detonation of the crystal they just experimentally prodded.
4. Start over from the top, assuming their actions have consumed a [Turn](/rules#turn), until they withdraw from the site or it becomes safe enough to stop counting [Turns](/rules#turn).

### Timekeeping in the Dungeon

Once the Delvers intrude on a ruin, dungeon, corrupt noble’s mansion, or other dangerous site the GM starts tracking time in [Turns](#turn). Each Delver can do one significant thing per [Turn](/rules#turn). Different Delvers can be doing different things in the same [Turn](/rules#turn).

The point of tracking [Turns](/rules#turn) is to have a rough measure of how much activity they’re engaging in within the ruin. The more the Delvers do and the longer they stay, the more likely that they’ll run into Wandering Encounters or the denizens will have time to realize that intruders are present. Eventually, the Delvers need to either pull back or clear the site entirely of its dangerous inhabitants.

| Activity                                       | Turns |
|------------------------------------------------|-------|
| Move from one room of interest to another      | 1     |
| Pick a lock or disarm a trap                   | 1     |
| Get in a fight with something                  | 1     |
| Perform first aid and looting after a fight    | 1     |
| Search a room carefully                        | 1     |
| Time a torch lasts until burning out           | 6     |
| Time a filled lantern lasts before burning out | 24    |

### Doors

Out of all the obstacles the party will face, doors will be *by far* the most common. Doors mark the beginning of most new areas, and so how to handle doors will come up *over and over*.

Doors can be **locked**, in which case a character with [Thieves Tools](/equipment#thieves-tools) can try pick it, usually with a DC 10 DEX/[Sneak](/rules#sneak) [check](#skill-checks). If they fail, they can not try again until they gain a level of experience.

Locked doors can be **battered down**. 6 turns less STR and [Exert](#exert) for wooden doors, and triple that for metal-reinforced doors. Metal or stone doors can not be battered down with mundane means. Roll an extra [Wandering Encounter](#wandering-encounters) every [Turn](#turn).

Doors can be **stuck**, in which case a character can try to force them open in a [Round](#round) with a DC 10 STR/[Exert](#exert) check. If they fail, it takes `1d3` [Turns](/rules#turn) to open the door.

Doors can be **listened at** for a Round (but only once per [Turn](/rules#turn)), revealing noises as loud as talking without a roll. The presence of anything quieter with requires a DC 10 WIS/[Notice](#notice) check.

To pass through a door, choose to make either a **hard** or **soft** entry. If not specififed, a soft entry is assumed.

In a **hard** entry, the party arranges around the entrance, bashes it in, and charges the room in a planned pattern of entry. They trigger any traps over the threshold and appear [hostile](#fight) to any inhabitants, but are capable of [surprising](#encounters-and-surprise) anyone who might be watching the door.

In a **soft** entry, the party arranges to defend and hold the door as a choke point, sufficiently far away from traps. One Delver opens quietly opens the door and observes. They have the opportunity to notice traps, do not appear hostile, but are incapable of surprising anyone who might be watching the door.

## Encounters

When the Delvers encounter a group of NPCs in a dungeon, either from a [Wandering Encounter](#wandering-encounters) or because the room contains NPCs, then:

1. The GM describes what the Delvers see/hear/smell,etc.
2. The Delvers choose if they want to fight, talk, run, or wait.
3. The GM rolls for (or chooses) the NPCs [reaction](#reaction-rolls). This frequently results in [parley](#parley) or in [combat](/combat).

### Encounters and Surprise

Delvers are sufficiently alert when exploring a site to avoid any chance of surprise, barring a set ambush. If they burst in on the denizens suddenly, however, the locals might be too stunned to act for a round.

If the GM thinks this is possible, use an [opposed](#opposed-skill-checks) roll. Represent bursting into a room as [group](#group-checks) STR/[Exert](#exert) vs WIS/[Notice](#notice) check. Represent sneaking up on a group as group DEX/[Sneak](/rules#sneak) vs WIS/[Notice](#notice).

### Wandering Encounters

Every so many [Turns](/rules#turn), a GM should roll `1d6` to check for a Wandering Encounter. On a 1, the Delvers will run into one at some point during the [Turn](/rules#turn). The frequency of the check will depend on how alert and organized the site’s inhabitants are.

The actual contents of the encounter are decided when the GM puts together the site. Not all encounters involve running into creatures. Some are mere events or situations that fit the site. In the same vein, not all encounters are necessarily hostile, either. [Reaction rolls](#reaction-rolls) should be made for all groups of creatures.

A wandering encounter starts when one side is able to see the other side, based on the map and available light sources. Usually this is symmetric, but differences in vision, light, etc may make one side able to see the other without being seen themselves. In these cases, the side with advantage may be able to achieve [surprise](#encounters-and-surprise).

#### When to Roll an Encounter Check

| Type of Location                           | Turns    |
| ------------------------------------------ | -------- |
| Alerted site with organized defenders      | Every 1  |
| Unalert site with organized defenders      | Every 2  |
| Site with no organized or active defense   | Every 3  |
| Site with very few mobile inhabitants      | Every 4  |
| Abandoned or disused nook in a site        | Every 6  |
| Chamber unknown to the natives of the site | No check |

### Reaction Rolls

When the party enocunters other creatures, the GM describes what they sense and asks the Delvers what they do. Broadly, the Delvers can:

- Start a <strong id="fight">fight</strong>, in which case either [combat](/combat) or the creatures flee.
- Try to <strong id="talk">talk</strong> (if the other creatures will listen). Getting anything useful requires [leverage](#leverage).
- <strong id="run-away">Run away</strong>, and the other creatures might give [chase](#chases-and-pursuit).
- <strong id="wait">Wait</strong> to see what happens.

If how the other creatures respond is uncertain, the GM rolls their reaction, comparing the result against the Delver's action:

| `2d6` / Action | Fight  | Talk                          | Run    | Wait                          |
| ------------ | ------ | ----------------------------- | ------ | ----------------------------- |
| 2            | Combat | Combat                        | Chase  | Fight                         |
| 3-5          | Combat | Combat if could win, run otw. | Chase  | Combat if could win, run otw. |
| 6-8          | Combat | Parley                        | Ignore | Ignore                        |
| 9-11         | Run    | Parley                        | Ignore | Ignore                        |
| 12           | Run    | Parley                        | Ignore | Parley                        |

Results of **Combat** mean just that - head immediately into [combat](/combat).

Results of **Combat if could win, run otw** means that they'll fight if they think that victory is *very* likely; typically this means they have a 3:1 HD advantage or greater. Otherwise, they'll Run.

Results of **Parley** mean that they [parley](#parley) with the Delvers. Meaningful parley requires [leverage](#leverage), otherwise it's just pleasantries or posturing.

Results of **Run** means that the they run from the Delvers (often to group up with allies). The Delvers may [give chase](#chase-and-pursuit).

Results of **Chase** means they'll [chase](#chase-and-pursuit) the fleeing Delvers.

Results of **Ignore** means they'll continue doing what they were doing before encountering the party.

Denizens of a dungeon immediately turning to combat should be *rare*, reserved for mindless undead, guardian automatons, or creatures protecting their children. More often, they'll go fetch allies to create an overwhelming advantage and force the Delvers to retreat.

## Parley

Talk is cheap, especially in a dungeon. Getting anything of value (information, assistance, items) requires <strong id="leverage">Leverage</strong>.

Leverage is (non-exhaustively) anything the Delvers...

- have that the NPCs want (an exchange).
- can do, that the NPCs want them to do (a promise).
- have done, that the NPCs appreciate (gratitude).
- can do, that the NPCs *don't* want them to do (a threat).

The amount of value a NPC is willing to offer should be no more than how much leverage the Delvers have.

**Beasts** and **monstrosities** want food and territory.

**Dragons** want food, territory, treasure, and domination.

**Humanoids** want territory, treasure, domination, or higher order concepts like fairness, kindness, loyalty, obediency, and sanctity.

**Giants** are obsessed in their place in the hierarchy of Giants, and anything that will help them climb that hierarchy.

**Undead** and **constructs** are compelled by whatever directive created them.

**Fiends** want to cause suffering.

**Aberrations** have intentionally alien, unintelligible motives.

**Fey** have emotional motives, often following dream logic or the [seven deadly sins](https://en.wikipedia.org/wiki/Seven_deadly_sins) (gluttony, lust, greed, sorrow, wrath, sloth, pride).

## Advancement

Characters accumulate <strong id="experience-points">Experience Points</strong> (XP) by defeating monsters, extracting coins and treasure from dungeons, and making it back to a settlement. The *party* accumulates XP while on an adventure, and then all surviving members get a share of the total XP when they return to town. Delvers get a full share and Henchmen get half of a share.

Coins and Treasure award 1 XP per 1g worth of value, regardless of whether the treasure is sold or the coin is spent. It just has to make it back to town.

For example, if the party of 4 Delvers and 3 [Henchmen](/equipment#henchmen) defeats 300 XP worth of monsters and hauls back 1500g worth of treasure from a dungeon, the party's total XP is 1800. There are `4 + 3/2 = 5.5` shares, so each Delver gets `1800 / 5.5 = 327` XP, and each Henchmen gets half that, 164.

### XP for Monsters

| Monster HD  | Base XP     | Bonus XP / Ability |
| ----------- | ----------- | ------------------ |
| Less than 1 | 5           | 1                  |
| 1           | 10          | 3                  |
| 2           | 20          | 5                  |
| 3           | 35          | 15                 |
| 4           | 75          | 50                 |
| 5           | 175         | 125                |
| 6           | 275         | 225                |
| 7           | 450         | 400                |
| 8           | 650         | 550                |
| 9–10        | 900         | 700                |
| 11–12       | 1,100       | 800                |
| 13–16       | 1,350       | 950                |
| 17–20       | 2,000       | 1,150              |
| 21          | 2,500       | 2,000              |
| 21+N        | 2,500+250•N | 2,000+250•N        |

### XP Thresholds

Once a character has enough XP to level up **and** is in a settlement, they do.

| Level | XP    | Level | XP     |
| ----- | ----- | ----- | ------ |
| 1     | 0     | 6     | 24000  |
| 2     | 1500  | 7     | 48000  |
| 3     | 3000  | 8     | 100000 |
| 4     | 6000  | 9     | 200000 |
| 5     | 12000 | 10    | 300000 |

### Advancement Benefits

**More HP.** To determine their new maximum, they roll their <strong id="hp-progression">HP Progression</strong> for each level they now possess, adding their CON to each die. No individual die can be reduced below 1 point, even with a negative CON. If the total roll is greater than their current maximum HP, they take the roll. Otherwise, their maximum HP increases by one.

**Better Saves.** Their saving throw scores decrease by one, making it easier to succeed on saving throws by rolling equal or over it. As a first level character has saving throw scores of 15, reaching second level would lower them to 14, modified by their appropriate attributes.

**Improved Attack Bonus.** A Delver’s attack bonus improves according to their level and their chosen [class](/classes).

**Gain Advancement Points.** A Delver who advances a level gains three <strong id="advancement-point">Advancement Points</strong> they can spend on improving their [Skills](#skills) or [attributes](#Attributes). [Experts](/classes#expert) and [Partial Experts](/classes#partial-expert) gain an extra bonus Advancement Point to spend (via [Quick Learner](/classes#class-ability-quick-learner)), giving them four points each time they advance.

The cost for improving a skill is listed below. Every skill level must be purchased in order; to gain level 1 in a skill you need to pay one point for level 0 and then two points for level 1. A Delver must be the requisite minimum level to increase a skill to certain levels. Less hardened adventurers don’t have the focus and real-life experience to higher degrees of mastery.

| Skill Level | Point Cost | Min Delver Level |
| ----------- | ---------- | ---------------- |
| 0           | 1          | 1                |
| 1           | 2          | 1                |
| 2           | 3          | 3                |
| 3           | 4          | 6                |
| 4           | 5          | 9                |

A Delver can also spend their Advancement Points to improve their Attribute scores by 1, recalculating their Attribute Modifier each time.

| Advancement | Point Cost | Min Delver Level |
| ----------- | ---------- | ---------------- |
| 1st         | 1          | 1                |
| 2nd         | 2          | 1                |
| 3rd         | 3          | 3                |
| 4th         | 4          | 6                |
| 5th         | 5          | 9                |

**Gain a new Feat**. At levels 2, 5, 7, and 10 a Delver can add a level to an existing [Feat](/feats) or pick up the first level in a new Feat.

If this is the first level they’ve taken in the Feat, they might be granted a <strong id="bonus-skill">Bonus Skill</strong>. During character creation, this is treated like any other skill [improvement](/delver-creation#improvement). Taken as part of advancement, however, it counts as three Advancement Points spent toward increasing the skill.

This is enough to raise a level -1 skill to level 1, or boost a level 1 skill to level-2. They may do this even if they aren’t high-enough level to normally qualify for a skill level that high.

If the Advancement Points aren’t enough to raise the skill to a new level, they remain as credit toward future advances. If applied to a skill that is already at level 4, the Delver can spend the Advancement Points on any other skill of their choice.

**More Spells and Arts**. Mages learn new arts, can cast and prepare more spells, and automatically learn new spells as they advance, based on their [arcane tradition](/arcane-traditions).

## Alignment

Alignment interacts with various magic items. Creatures in [bestaries](https://oldschoolessentials.necroticgnome.com/srd/index.php/Goblin) will often have an alignment, which is useful for interpretting their moral theory. Delvers don't *choose* an alignment, they *live* it. If a magic item only works for Lawful characters, then they need to act Lawfully or it does not work for them (GM discretion).

### Law vs Chaos

**Lawful**: [Deontological](https://en.wikipedia.org/wiki/Deontology). Deontology is a moral theory that emphasizes the importance of adhering to moral rules or duties, regardless of the consequences. It holds that certain actions are inherently right or wrong based on the nature of the action itself, rather than the outcomes it produces. Deontologists believe that moral rules, such as honesty, promise-keeping, and respect for autonomy, should be followed as a matter of principle, even if doing so may lead to undesirable results in specific situations.

**Neutral**: [Virtue ethics](https://en.wikipedia.org/wiki/Virtue_ethics). Virtue ethics is a moral theory that emphasizes the cultivation of virtuous character traits, such as wisdom, courage, justice, and temperance. According to virtue ethics, the foundation of ethics lies in developing good character and making decisions based on what a virtuous person would do in a given situation. The goal is to become a morally exemplary individual who consistently acts in accordance with these virtues, leading to a fulfilling life and contributing to the well-being of society as a whole.

**Chaotic**: [Act consequentialist](https://en.wikipedia.org/wiki/Consequentialism). Act consequentialists argue that the moral value of an action is determined by its actual outcomes rather than the intentions behind it or adherence to moral rules.
Good vs Evil

### Good vs Evil

**Good**: [Altruist](https://en.wikipedia.org/wiki/Altruism). Acting selflessly to benefit others without expecting anything in return, often at cost to oneself.

**Neutral**: [Ethical egoist](https://en.wikipedia.org/wiki/Ethical_egoism). An action is morally right if it maximizes one's self-interest. According to ethical egoists, the only moral obligation an individual has is to promote their own well-being, and they should only consider the interests of others insofar as doing so ultimately benefits themselves.

**Evil**: Malicious egoist. Actively seeks to harm and exploit others for their own gain or pleasure. They lack empathy, disregard the rights and well-being of others, and may even derive satisfaction from causing suffering.
