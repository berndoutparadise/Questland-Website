# Questland visual prompt set

All visuals were generated with the built-in ImageGen mode.

## V2 art direction

Premium, bright stylised 3D video-game key art for a modern real-life-gaming brand. The result must look unmistakably like rendered game art rather than photography: clean sculpted forms, simplified facial anatomy, slightly stylised youthful proportions, grouped hair shapes and smooth hand-authored materials. Use daylight or golden hour, open shadows, vivid natural colours and immediately readable actions.

Avoid photorealism, stock-photo faces, skin pores, individual photographic hair strands, lens effects, dark crushed shadows, horror, military uniforms, firearms, medieval-fantasy clichés, comic outlines, anime and neon cyberpunk.

## Recurring core team

The binding master reference is stored at
`reference-groups/master/questland-core-team-master.png`.

This image is the single source of truth for all future Questland key art:

- Blue: curious young strategist with map, blue outdoor clothing and dark wavy hair.
- Orange: confident pathfinder with compass, orange outdoor clothing, freckles and a curly braided ponytail.
- Green: friendly technology-focused explorer with scanner, forest-green outdoor clothing and high-top coils.
- Lime: capable girl around 9–10 with lime outdoor clothing, an asymmetrical black bob and her spherical exploration robot.

Faces, hairstyles, clothing designs, colour assignments, relative proportions and
signature equipment are locked. New key art must adapt its scene, pose, lighting and
camera perspective to these characters. If generation introduces inconsistencies,
correct the new image to match the master reference; never alter the master reference
to match a later image.

The existing `questgiver.png` remains the adult Questgiver.

## Hero desktop V2

Wide landing-page key art. The four recurring young protagonists move through a bright meadow toward an orange-and-lime objective beacon at a forest edge and stone ruin. Keep the left side visually calm for website copy and place the group and objective from the centre to the right.

## Monster Hunt V2

The young team cooperates to recover a glowing mission case guarded by a humanoid forest-monster NPC in a plausible layered moss-and-leaf costume. Show teamwork, stealth and one shared objective. Do not use a dragon, dinosaur or giant fantasy creature.

## Team Battles V2

Two colour-coded teams of children and teenagers play capture the flag in a sunny meadow. Use harmless padded props, soft shields and colourful game markers. The action must read as energetic real-life gameplay, not sports photography or military combat.

## Adventure V2

The recurring team solves a physical puzzle at a sunlit real castle ruin. Use a map, symbol tile, mechanical stone dial, scanner and a restrained objective marker. The scene communicates exploration and cooperation without magical fantasy.

## Undercover V2

The young team debates clues and secret role cards around a bright field-camp mission table. Glances and body language communicate playful suspicion and social deduction. Use abstract card symbols only; avoid noir, spy and weapon clichés.

## Special Mission V2

Teenagers coordinate a multi-stage mission over a portable terrain map while several objectives remain visible across a large outdoor landscape. The scene is tactical and cinematic, but friendly and clearly non-military.

## Social preview V2

The same four young protagonists cross a sunny meadow toward a mission beacon. A warm-cream field on the left contains exactly:

`QUESTLAND`

`VIDEOSPIELE IM ECHTEN LEBEN.`

`DIE WELT IST EUER SPIELFELD.`

The generated source is `v2/social-preview.png`. Run `pnpm build:og` to create the 1200 × 630 JPEG at `public/og-v2.jpg`.
