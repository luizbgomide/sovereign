---
layout: default
title: Home
---

# Tutorial

Rather than the rest of this document which is designed to be an efficient and clear reference, this section is designed to *teach*.

There will be both examples as well as *exercises*. It's easy enough to *think* you understand the material, but then go blank when asked questions that test edge cases or understanding. Feel free to *look up* the answers to exercises, but you're cheating yourself if you just click to see the answer before attempting.

<details>
  <summary><strong>Exercise</strong>: How do you see the answer of an exercise?</summary>
  <p>You click on it!</p>
</details>

## Delver Creation

Have a read through the [delver creation](/delver-creation) document, top to bottom. When you're finished, grab a blank page of paper and *actually* create a character, writing your own labels for the data that you need to record. Follow [delver creation](/delver-creation), **not** the example, to build your character.

### Worked Example

After reading through delver creation, following the various links and having a look at the classes, equipment, and spells, I start from the top.

**Choose a character concept.** One friend wants going to play a big two-handed conan the barbarian type, my partner is obsessed with necromancy ever since watching the mummy as a child, and the other buddy really wants to be a bilbo baggins. I figure the best way I could round out the team would be to play someone that can keep the team alive. I'm thinking it would be really cool to play some sort of support archer, throwing out heals from range if needed, but being a decent shot with a bow otherwise.

**Generate Attributes.** I roll [`3d6`](https://anydice.com/program/1) 5 times in order and get Strength 14, Dexterity 7, Constitution 11, Intelligence 8, Wisdom 10. Since I want to be a good shot, I raise my Dexterity to 14. I write them all down.

![small](/assets/images/generate-attributes.png)

**Starting Improvements.** I write down all of the skills at level -1

![small](/assets/images/record-initial-skills.png)

Then I get to make 4 improvements. My Strength and Dexterity are already 14, which is the threshold for +1, and the rest of my Attributes are at +0 and quite far away from 14 so I'll stick to improving my skills for now.

I decide that want to be be a great healer, handy with a bow, and be knowledgable, so I improve [Heal](/rules#heal) twice (to +1), [Shoot](/rules#shoot) once (to +0), and [Know](/rules#know) once (to +0).

![small](/assets/images/improved-skills.png)

**Choose a Class.** I know that I want to be a Healer, but since it only comes as a Partial Mage, I need to pick another partial class. Partial Warrior would give me more HP and accuracy, but Partial Expert is still good with a bow and makes me *even better* at healing (as well as helping me with everything else). I decide on Partial Expert, making me an [Expert/Mage(Healer)](/classes#partial-expertpartial-mage).

![small](/assets/images/choose-class.png)

**Choose Feats.** The "Feats" column for level 1 Partial Expert/Partial Mage says I get "1 Non-combat + 1 Any", which means I can select any feat that doesn't have the crossed swords icon, and then any feat I want.

First, I'll pick up [Gifted Chirurgeon](/feats#gifted-chirurgeon) at rank 1 to be *even better* at healing. This gives me [Heal](/rules#heal) as a [Bonus Skill](/rules#bonus-skill), and since I already have [Heal](/rules#heal) at +1, I can make a free improvement. I'll improve my [Shoot](/rules#shoot) to +1.

For my other feat, I'll pick up [Deadeye](/feats#deadeye-c) at rank 1 to do more damage with my bow. This gives me [Shoot](/rules#shoot) as a [Bonus Skill](/rules#bonus-skill), and since I already have [Shoot](/rules#shoot) at +1, I can make a free improvement. I'll improve my [Know](/rules#know) to 1.

![small](/assets/images/choose-feats.png)

**Record Attribute Modifiers.** I record my modifiers next to my attributes. My STR and DEX are +1 and the others are +0.

![small](/assets/images/attribute-mods.png)

**Generate Maximum Hit Points.** My class of [Expert/Mage(Healer)](/classes#partial-expertpartial-mage) tells me that I start with `1d6` HP (plus my 0 CON). I roll a 3. Mildly unlucky, but we'll take what we can get.

![small](/assets/images/generate-hp.png)

**Record Attack Bonus.** My class tells me that I start with a +0 attack bonus.

![small](/assets/images/attack-bonus.png)

**Record Saving Throws**. My Physical save is 15 minus the highest of STR or CON, so 14. My Evasion save is 15 minus the highest of DEX or INT, so 15. My Mental save is 15 minus the highest of INT or WIS, so 15. I'll write them with the other stuff that tends to change when I level up.

![small](/assets/images/saving-throws.png)

**Choose Starting Gear**. I roll `3d6•10` and get 130g starting gold; lucky! I can carry 7 Stowed enc and 14 Readied enc.

I'll grab Plate armor (60g, 3 enc), a Large Bow (7g, 2 enc), a Quiver (10g, 1 enc, comes with infinite arrows), and a Healer's Kit (10g, 1 enc) for my Readied items.

I'll save my other 43g to add to the party slush fund and wait to buy the rest of my adventuring equipment to fill in missing gaps.

![small](/assets/images/inventory.png)

**Record Weapon Statistics.** I can shoot my bow at 100 ft for close range, 600 for long range. I add +2 to hit (+1 from DEX, +1 from Shoot), and I do `1d8+1` damage on a hit (+1 from Deadeye). I haven't picked up a melee weapon yet, but I figure with Deadeye I probably won't need one.

I write `• Bow(100/600): +2 -> `1d8+1` in my preferred short hand for weapon stats for basically any d20 game.

![small](/assets/images/weapon-stats.png)

**Record Armor Class.** Plate armor gives me 16 AC and my DEX bumps that to 17.

![small](/assets/images/armor-class.png)

**Mages Choose Starting Spells.** Healers are technically mages, but don't get any starting spells, so we skip this.

**Mages Record Effort.** Healers get Heal+INT effort, so 1 for now.

![small](/assets/images/effort.png)

**Mages Choose Starting Arts.** I get [Healing Touch](/arcane-traditions#healing-touch) and an art of my choice. In order to make the healing-at-range thing work, I'll pick up [Far Healer](/arcane-traditions#far-healer). I'm limited to 10ft right now, but that should be fine. It'll get better as I level up. There's a decent argument to be made for taking a different Art that's more useful at lower levels, and then picking up Far Healer at level 2 or 4, but I think this is fine.

![small](/assets/images/arts.png)

**Create Descriptive Details.** I'm imagining a character a lot like [Lucie](https://battlerite.fandom.com/wiki/Lucie) from Battlerite. I decide she's a chipper, slightly unhinged failed alchemist and flavor healing touch as chucking alchemical healing bombs at people. I think it will be fun to juxtapose her relentless optimism with the brutality and horror of dungeoneering. I'll name her Sunny.

![small](/assets/images/character-details.png)

That's a character!

### Exercises

<details>
  <summary><strong>Exercise</strong>: Say that a Warrior has a Strength of 17. What is their STR?</summary>
  <p>+1. This is notable becuase in BX it would be +2 and in D&D5e it would be +3. Sovereign uses a more narrow mod distribution because it also uses skills.</p>
</details>

<details>
  <summary><strong>Exercise</strong>: Can a character guarantee an 18 in at least one attribute, regardless of how poor they roll?</summary>
  <p>Yes. They can choose 1 attribute to start at 14 in step #2, and then can improve that stat four times to 18, though their skills would be very poor.</p>
</details>

<details>
  <summary><strong>Exercise</strong>: Say a Delver wants to roll a Dex/[Sneak](/rules#sneak) check with a +1 bonus. They have 11 Dexterity and no [Sneak](/rules#sneak) skill. How might they do this?</summary>
  <p>They either need +1 DEX and [Sneak](/rules#sneak-0, or +0 DEX and [Sneak](/rules#sneak-1.</p>
  <p>Getting to +1 DEX would take 3 of their 4 improvements, and they could spend the last one on [Sneak](/rules#sneak.</p>
  <p>Alternatively, getting to [Sneak](/rules#sneak-1 just takes 2 improvements.</p>
  <p>Finally, they could save themselves an improvement by choosing a Feat (or multiple feats) that grant [Sneak](/rules#sneak) as a <a href="/rules#bonus-skill">Bonus Skill</a>, like <a href="/feats#assassin-c">Assassin</a> or <a href="/feats#imposter">Imposter</a>.</p>
  <p>Note the dynamics here. There are more skills than attributes, so skills apply more narrowly and attributes apply more broadly. Attributes, in turn, tend to be more expensive to meaningfully upgrade.</p>
</details>

<details>
  <summary><strong>Exercise</strong>: What are the benefits to being a partial Warrior?</summary>
  <p>There are three: they gain an extra Combat feat at level 1, they get the Warrior's superior HP progression (`1d6`+2 each level), and they get the Warrior's superior attack bonus progression (+1 each level)</p>
  <p>The downside is that they <strong>do not</strong> get the Warrior's <a href="class-ability-veterans-luck">Veteran’s Luck</a> or <a href="class-ability-killing-blow">Killing Blow</a> abilities</p> As a result, they'll be less accurate (because they can't turn misses into hits), less hardy (because they can't turn hits on them into misses), and less damaging (because they don't add their level to their shock or damage).
</details>

<details>
  <summary><strong>Exercise</strong>: Why do we wait until after choosing a class and feats to determine attribute modifiers?</summary>
  <p>Because Mages gain a <a href="/rules#bonus-skill">Bonus Skill</a> related to their arcane tradition, like how High Mages gain [Magic](/rules#magic). Similarly, some feats like <a href="/feats#poisoner">Poisoner</a> grant a Bonus Skill.</p>
  <p>If the Delver already has that skill at rank 1, they instead get a free improvement which they may spend on improving an attribute. This, in turn, might change its modifier.</p>
</details>

<details>
  <summary><strong>Exercise</strong>: An Expert rolls a 14 for their starting gold. They are starting play in a small hamlet, with a population of 300. How many pints of <a href="/equipment#holy-water">Holy Water</a> can they start with?</summary>
  <p> 5. They would have 14•10 = 140g, and 5 vials costs 125g. We do not need consider <a href="/equipment#equipment-availability">Equipment Availabilty</a> at character creation, though afterwards the whole party only has a 10% chance of being able to purchase one vial a month from the hamlet.</p>
</details>

<details>
  <summary><strong>Exercise</strong>: Can you be an Elf or Dwarf?</summary>
  <p>Probably! This is up to to the GM and their setting. Regardless, Elves and Dwarves have no mechanical benefit over any other ancestry for Delvers, so you're free to pick purely on flavor. If you want your Delver to feel more traditionally elvish or dwarvish, give them fitting Feats.</p>
</details>

<details>
  <summary><strong>Exercise</strong>: Can I have darkvision or infravision?</summary>
  <p>Yes, though you'll have to take the right <a href="/arcane-traditions">Arcane Tradition</a>.</p>
</details>

## The Big Picture

First, read through [The Big Picture](/rules#the-big-picture) and [Core Gameplay Loop](/rules#core-gameplay-loop) and then come back here.
We focus on playing adventures because that's where the [high quality](https://udan-adan.blogspot.com/2016/11/conceptual-density-or-what-are-rpg.html) content is. The GM proposes only modules that *they'd like to run*. That means that regardless of the player's choice, they're happy. Having the players talk and choose out-of-game means that they're making choices as players (who are playing to have fun) rather than characters (who are choosing based on in-game goals like wealth and power). It can be a whole lot of fun to put your Delver through horrible sitautions!


### Worked Example

The players just defeated the [Black Wyrm of Brandonsford](https://rancourt.substack.com/p/review-the-black-wyrm-of-brandonsford) and hauled its hoard back to town, everyone reaching level 3.

**GM**: The citizens of brandonsford ecstatic that you've slain the beast, and the revelry continues well into the week. Many of the folks you've met or helped come to pay their respect, Bently of the clumsy fox, Warwick, hand in hand with Ingrid, Father William, and even George the hunter seems to be in better spirits. As the celebrations are winding down, the town reeve, Eric, announces that they'll be memoralizing you along side Brandon as the second saviors of Brandonsford. Is there anything else you want to do here before we wrap up?

**Player**: I'd like to have my character, Huxley, stick around in Brandonsford for a few years. Settle in. Help Rebuild.

**GM**: No problem, we can make another chacter between sessions. Speaking of, here's what I'm thinking: We could play [the forest of gornate](https://www.drivethrurpg.com/en/product/426926/The-Forest-of-Gornate?1892600=) which is a forest adventure with fallen civilizations, strange denizens, natural wonders, mysterious villas, and reclusive bandit leaders - there's a lot going on. Another option is [cavern of the creeping terror](https://www.drivethrurpg.com/en/product/418780/Cavern-of-the-Creeping-Terror?1892600=) which is a dungeon crawl with undead pirates, imprisoned fae, and huge slugs. Finally, we have [peril in the olden wood](https://www.drivethrurpg.com/en/product/397008/Peril-in-Olden-Wood?1892600=) which is a small hexcrawl with a bunch of interconnected problems happening; bigger in scope than the other two.

**Player**: I'm leaning toward the creeping terror one, but I don't know yet.

**GM**: No need to decide right now. I'll drop the options in the group chat, but please vote by end-of-day tomorrow so I have time to prep!

## Core Gameplay Loop

I can't stress enough how important this is "getting" it. This loop and The Big Picture are the whole thing - all the rest is commentary.

We have stuff like attributes and skills to make it easier for the GM to come up with consistent rulings for common situations, and for the players to be on the same page as the GM. We have subsystems like combat because it tends to be high stakes as well as *fun* to game out, but ultimately it serves the same purpose.

The Core Gameplay Loop has a lot of hidden complexity in it. For instance, take "players describe their actions and the *intent* behind their actions". Say that there's a 20ft pit that a player wants to cross. There's a big difference between an intent of "I want to clear the pit" and "I want to have a shot of grabbing the far ledge". In the first one, they're asking to just totally succeed. In the second one, they're asking for a *chance* to catch the ledge - even if they succeed at their *jump*, they still might not *catch*, and that uncertainty puts us back at the beginning of the loop, and allows us to build more complex mechanics. An excellent post on the subject is [Advantage and Impact - Dreaming Dragonslayer](https://dreamingdragonslayer.wordpress.com/2020/03/28/advantage-and-impact/).

These are the levers for negotiation. If the players are unhappy with their chances, they can negotiate with less desirable intents or more grevious consequences and so on. Similarly, this is the GM's space to port in more complex subsystems where they think they're needed, to handwave it all with a roll, or to say it *just happens*.

Finally, this is what allows for [tactical infinity](https://rolltop-indigo.blogspot.com/2018/05/the-invisible-rulebooks.html). [Notice](/rules#notice) how the phrase is "players describe their actions and the intent behind their actions" and **not** "players pick an action or skill to use". The players can try *anything*, and it's the GM's job to figure out what happens. *Sometimes* that results in a dice roll (which is *sometimes* a skill check), but usually what they want to do just happens.

This isn't to say that players don't need to learn the rules; *they do*. If a game is about making [informed, impactful choices](https://www.bastionland.com/2018/09/the-ici-doctrine-information-choice.html) then the rules themselves are doing a lot of the heavy lifting of making the choices *informed*. A player who has read the rules is much more informed about how "I want to distract the Bear with my staff to give Huxley an opening" will *actually work* if they know how [Swarm Attack](/combat#make-a-swarm-attack-main) works and so on. Playing Sovereign without knowing how the rules work would be a *lot* like playing chess without knowing the rules. You *can do it*, but it'll be much less interesting and can potentially feel unfair.

### Worked Example

Say that we're playing [Winter's Daughter](https://www.drivethrurpg.com/en/product/270795/Winters-Daughter). The players at at the Tomb Entrance:

![small](/assets/images/winters-daughter-stone.png)

**GM**: You see a mound sealed by a huge, granite slab. The whole thing is overgrown with lichen and sweet-smelling roses. What do you do? *(describe the situation, ask "what do you do?")*

**Player**: Does it look like we can move that slab? *(the players ask for clarification)*

**GM**: Hmm - hard to say. It's huge and granite is **heavy**. You also don't know how thick it is and can't tell just by looking. Are you willing to try to budge it? *(describe the situation, ask "what do you do?")*

**Player**: Sure - I'll use my crowbar and see if I can nudge it. *(the players describe their action and intent)*

**GM**: It moves, but barely; not something you could lift off like that. What do you do? *(inform the players about their chances)*

**Player**: What if everyone helps shove? *(come up with a better plan)*

**GM**: Sure - how about a [DC 8 group STR/[Exert](/rules#exert) check](/rules#group-checks)? And if it fails, everyone takes a point of System Strain as you have to give it your all? *(inform the players about their chances)*

**Player**: Yuck, that's a lot of strain. We're pretty flush - do you think some of the burly townsfolk would be willing to help us out for coin? *(come up with a better plan)*

**GM**: Sure - how about it takes a day and 20g to rustle everyone up, and then they'll be able to push it no problem? *(inform the players about their chances)*

**Player**: Works for me. *(if the players find the ruling reasonable...)*

**GM**: Alrighty - ya'll head back to town, rustle folks up, pay them their dues, and then in the morning head back to the barrow and get the stone pushed off. The townsfolk shudder, clearly nervous, and quickly head back. Underneath the huge are dusty stone stairs descending down into the darkness. It's deathly silent and it smells moist and mouldy. *(honor the stakes and fast forward to the next meaningful decision)*

### Exercises

<details>
  <summary><strong>Exercise</strong>: What should the GM tell the players when the enter a new situation?</summary>
  <p>Only what they can sense without taking further action, which is usually sights, sounds, and smells and <strong>not</strong> what they feel or taste.</p>
  <p>It should not be assumed that the PCs touch anything or move anywhere. The choice of what to interact with and how to interact with it are a big part of player skill, and what makes exploration a <strong>game</strong>.</p>
</details>

<details>
  <summary><strong>Exercise</strong>: As a player, what are my options if I don't like the ruling the GM made for my plan?</summary>
  <p>Broadly, you have three choices. Come up with a different plan entirely, try to change their mind (weak), or negotiate (strong). Some plans are strictly better than other plans, but most of the time, you'll be making trade-offs. It's <i>faster</i> to jump over a pit than to fetch a plank to slide across it, but <i>riskier</i>.</p>
</details>

<details>
  <summary><strong>Exercise</strong>: As a GM, do I need to narrate every situation?</summary>
  <p>No! Check out the last statement in the worked example. The GM narrates through the trip back to town, the process of gathering folks to help, whatever happened in the evening, and the trip back to the mound, all in one sentence. This is the <a href="https://thealexandrian.net/wordpress/31509/roleplaying-games/the-art-of-pacing">art of pacing</a>.</p>
</details>

## Skills

Have a read of [Attributes](#attributes) and [Skills](#skills) and then come back.

A check is `2d6 + attribute mod + skill >= DC`, and the GM is in charge of determining each factor. As a player, you *do not* want to request skill checks - skill checks are how things go *wrong*. Instead, stick to stating your actions and intents, and *hope* that a skill check isn't called for!

Of the three factors, the DC is supposed to represent how hard *in general* the task is. The attribute mod represents that some people are naturally smarter, more coordinated, or are stronger than others, and that for those people, the same task should be easier. Skill represents that some people can have more *training* in a thing than others, and it should be easier for those folks too. It's simpler and more abstract than reality, but [most things are](http://johnsalvatier.org/blog/2017/reality-has-a-surprising-amount-of-detail).

When in doubt, use DC 10 as a default; it's low enough that success is still reasonable, but high enough to encourage players to work together, negotiate for softer intents, higher stakes, or higher costs, or come up with other plans.

This graph gives the distribution of rolling at least a number on `2d6`:

![small](/assets/images/skill-check-stats.png)

A DC 10 check has only a 17% chance of success. If they have +1 in the relevant mod and +1 in the relevant skill, then they'd only need to roll an 8, which jumps them all the way up to 42%. If a friend is able to help, that gets them to 58%. These are *huge* differences, and incentivize the style of play we're aiming for.

### Worked Example

Say we are playing through [Stonehell](https://www.lulu.com/shop/michael-curtis/stonehell-dungeon-down-night-haunted-halls/paperback/product-1v8vy2zz.html)). Alice's Delver has just fallen down the pit trap in area 1B, arriving at 2B21. Here's the original text:

> 21. Landing Pad: Fearsome faces carved in walls; bloodstains; broken weapons & equipment. Victims of the pit trap on Level 1B arrive here, taking `1d6` points of damage from the slide and tumble. The chute may be climbed by a thief with a Climb Walls check or by any other character aided by ropes & spikes and making a STR check.

If the Delver wants to rejoin the party, we might rule getting up by yourself as a DEX/[Exert](/rules#exert) 10 check, each attempt taking a turn, and on failure they fall and suffer `1d3` damage (since they're prepared and falling less distance). If they get a rope lowered down, I'd have this be a DC 6 group STR/[Exert](/rules#exert) check (or just let them back up).

## Injury, Healing, and System Strain

Have a read through [Injury, Healing, and System Strain](injury-healing-and-system-strain) and then come back.

The main changes here compared to [BX](https://www.drivethrurpg.com/en/product/110274/d-d-basic-set-rulebook-b-x-ed-basic) are:

- Characters do not die at 0 hp. Instead, they're [Mortally Injured](/rules#mortal-injury-and-stabalization) and become [Frail](/rules#frail).
- Frail is a harder to remove, either requiring luck or a week of rest.
- Healing is much more accessible (via [First Aid](/rules#first-aid)), but also still wears characters down over time (via [System Strain](/rules#system-strain)).
