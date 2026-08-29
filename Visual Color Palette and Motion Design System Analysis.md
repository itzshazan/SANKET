# Visual Color Palette & Motion Design System Analysis

This comprehensive design specification document details the complete visual color palette, component mappings, visual hierarchy, motion design system, and interaction choreography extracted from the analyzed UI video.

## 1\. Structured Color Map

The following table outlines every significant color mapped across its exact timeline appearance, UI component, design role, HEX/RGB values, and practical usage.

| **Timestamp** | **Section**    | **Element / Component**               | **Color Role**  | **HEX Code** | **RGB Values**     | **Usage Details**                                  |
| ------------- | -------------- | ------------------------------------- | --------------- | ------------ | ------------------ | -------------------------------------------------- |
| 00:00–00:02   | Hero           | Main Page Background (underlay)       | Background      | #1C2417      | rgb(28, 36, 23)    | Base backdrop behind hero image / overlay          |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:00–00:02   | Hero           | Top Nav & CTA Pill                    | Surface / CTA   | #FFFFFF      | rgb(255, 255, 255) | Nav pill background & "Signup" button              |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:00–00:02   | Hero           | Hero Heading & Nav Links              | Text            | #F5F7F2      | rgb(245, 247, 242) | Main H1 text and nav links over imagery            |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:01–00:02   | Hero           | Primary CTA Button ("Get started")    | Action / Accent | #C8EA3B      | rgb(200, 234, 59)  | CTA button pill background & tag highlights        |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:01–00:02   | Hero           | CTA Button Text & Arrow               | Text            | #213318      | rgb(33, 51, 24)    | High-contrast label inside primary lime CTA        |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:01–00:02   | Hero           | Floating Metric Card Background       | Surface         | #FFFFFF      | rgb(255, 255, 255) | "Cashflow" dashboard card                          |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:01–00:02   | Hero           | Metric Badge & Bar Graph Top          | Accent          | #C8EA3B      | rgb(200, 234, 59)  | 35% badge and active chart segments                |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:01–00:02   | Hero           | Bar Graph Bottom Segments             | Data Viz        | #213318      | rgb(33, 51, 24)    | Base bar series in cashflow chart                  |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:03–00:05   | Social Proof   | Logo Marquee Banner                   | Surface         | #F7F9F5      | rgb(247, 249, 245) | Pill background container for partner logos        |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:03–00:05   | Features 1     | Section Background                    | Background      | #FFFFFF      | rgb(255, 255, 255) | Clean white canvas                                 |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:03–00:05   | Features 1     | Feature Heading & Subtext             | Text            | #1A2614      | rgb(26, 38, 20)    | "Build for your next gen of payment"               |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:03–00:05   | Features 1     | Feature Card 1 (Left)                 | Surface         | #DDF2EC      | rgb(221, 242, 236) | Pale seafoam mint tinted feature tile              |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:03–00:05   | Features 1     | Feature Card 2 (Middle)               | Surface         | #F8F9F6      | rgb(248, 249, 246) | "Control spend" card background with subtle border |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:03–00:05   | Features 1     | Feature Card 3 (Right)                | Surface         | #1F3017      | rgb(31, 48, 23)    | "Fuel your growth" dark feature tile               |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:03–00:05   | Features 1     | Action Pill Buttons                   | CTA             | #213318      | rgb(33, 51, 24)    | "Start banking →", "Manage expenses →"             |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:06–00:09   | Features 2     | Grid Card 1 ("No spend restrictions") | Surface         | #EBF3EA      | rgb(235, 243, 234) | Light sage multi-pill feature card                 |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:06–00:09   | Features 2     | Grid Card 2 ("Intuitive Performance") | Surface         | #ECEBFA      | rgb(236, 235, 250) | Soft ice lavender balance summary card             |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:06–00:09   | Features 2     | Interactive Pill Tags                 | Surface         | #C8EA3B      | rgb(200, 234, 59)  | "Product investment", "Online payment" tags        |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:10–00:13   | Pricing / Calc | Section Background                    | Background      | #FFFFFF      | rgb(255, 255, 255) | Section base container                             |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:10–00:13   | Pricing / Calc | Calculator Card                       | Surface         | #E4F76E      | rgb(228, 247, 110) | Pale chartreuse interactive calculator container   |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:10–00:13   | Pricing / Calc | Slider Track / Filled Bar             | UI Component    | #213318      | rgb(33, 51, 24)    | Active slider track and thumb                      |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:14–00:16   | FAQ            | Accordion Section Background          | Background      | #273C1E      | rgb(39, 60, 30)    | Full-width dark FAQ block                          |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:14–00:16   | FAQ            | FAQ Main Heading                      | Heading         | #C8EA3B      | rgb(200, 234, 59)  | "Frequently Asked Questions"                       |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:14–00:16   | FAQ            | Accordion Trigger Text & Icons        | Text / Icon     | #E8F89A      | rgb(232, 248, 154) | Questions list, + and − symbols                    |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:14–00:16   | FAQ            | Accordion Body Text                   | Body Text       | #C5D7BD      | rgb(197, 215, 189) | Answer text & supporting description               |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:14–00:16   | FAQ            | Accordion Divider Lines               | Border          | #37502B      | rgb(55, 80, 43)    | Horizontal rule separating questions               |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:17–00:19   | Testimonial    | Quote Text Highlight                  | Text            | #C8EA3B      | rgb(200, 234, 59)  | Large testimonial quote text                       |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:17–00:19   | Testimonial    | Attribution Text                      | Text            | #C5D7BD      | rgb(197, 215, 189) | "Sarah Mitchell, Co at BrightThreads"              |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:19–00:21   | Articles       | Blog Section Background               | Background      | #FFFFFF      | rgb(255, 255, 255) | Grid container background                          |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:21–00:23   | CTA Banner     | Banner Background                     | Background      | #F1F8D9      | rgb(241, 248, 217) | Soft chartreuse gradient CTA container             |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:23–00:24   | Footer         | Footer Section Background             | Background      | #1E2D17      | rgb(30, 45, 23)    | Main footer background container                   |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:23–00:24   | Footer         | Footer Heading & Social Icons         | UI / Icon       | #D3E4CB      | rgb(211, 228, 203) | Social circular button icons & brand logo          |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |
| 00:23–00:24   | Footer         | Footer Nav Links & Legal              | Muted Text      | #7E9473      | rgb(126, 148, 115) | Copyright, address, and navigation links           |
| ---           | ---            | ---                                   | ---             | ---          | ---                | ---                                                |

## 2\. Complete Master Palette

- **Primary Colors:**
  - Deep Forest Olive: #213318 (rgb(33, 51, 24)) — Primary dark background, CTA buttons, dark headings.
  - Crisp White: #FFFFFF (rgb(255, 255, 255)) — Core light background and text contrast.
- **Secondary Colors:**
  - Dark Spruce Text: #1A2614 (rgb(26, 38, 20)) — Editorial typography and body headings.
  - Soft Card Surface: #F8F9F6 (rgb(248, 249, 246)) — Light card fills and module backdrops.
- **Accent Colors:**
  - Electric Lime Green: #C8EA3B (rgb(200, 234, 59)) — High-emphasis CTA buttons, metric tags, active chart bars, and FAQ headers.
  - Pale Chartreuse: #E4F76E (rgb(228, 247, 110)) — Calculator card background and banner tint.
  - Pale Seafoam Mint: #DDF2EC (rgb(221, 242, 236)) — Secondary feature tile.
  - Soft Ice Lavender: #ECEBFA (rgb(236, 235, 250)) — Secondary feature tile.
- **Background Colors:**
  - Light Page Canvas: #FFFFFF (rgb(255, 255, 255))
  - Dark Page Canvas (FAQ & Footer): #273C1E / #1E2D17 (rgb(39, 60, 30) / rgb(30, 45, 23))
  - CTA Banner Gradient Base: #F1F8D9 (rgb(241, 248, 217))
- **Text Colors:**
  - Dark Heading / Primary: #1A2614 (rgb(26, 38, 20))
  - Dark Body / Muted: #586650 (rgb(88, 102, 80))
  - Light Heading / Inverse: #FFFFFF (rgb(255, 255, 255))
  - Dark Mode Body / Secondary: #C5D7BD (rgb(197, 215, 189))
  - Footer Muted: #7E9473 (rgb(126, 148, 115))
- **Border & Divider Colors:**
  - Light Theme Borders: #E3E8DF (rgb(227, 232, 223))
  - Dark Theme Dividers: #37502B (rgb(55, 80, 43))

## 3\. Section-by-Section Distribution & Visual Hierarchy

### Section Color Distribution

- **Hero (00:00–00:02):** Background Overlay: #1C2417 | Heading: #FFFFFF | Body Text: #D6E2D1 | CTA Button: #C8EA3B | Floating Dashboard Card: #FFFFFF.
- **Features & Bento Grid (00:03–00:09):** Background: #FFFFFF | Heading: #1A2614 | Pastel Cards: #DDF2EC (Mint), #ECEBFA (Lavender), #EBF3EA (Sage) | Buttons: #213318.
- **Fee Calculator (00:10–00:13):** Background: #FFFFFF | Heading: #1A2614 | Calculator Card: #E4F76E | Slider Track & Thumb: #213318.
- **FAQ Accordion (00:14–00:16):** Background: #273C1E | Heading: #C8EA3B | Questions: #E8F89A | Answers: #C5D7BD | Dividers: #37502B.
- **Testimonial (00:17–00:18):** Dark Overlay: #182314 | Quote Statement: #C8EA3B | Attribution: #C5D7BD.
- **Footer & Pre-Footer CTA (00:21–00:24):** CTA Banner: #F1F8D9 | Footer Canvas: #1E2D17 | Icons & Logo: #D3E4CB | Links: #7E9473.

### Hierarchy & Visual Intent

- **Dominance:** High-contrast alternation between clean Pure White (#FFFFFF) light zones and rich Deep Forest Olive (#213318 / #273C1E) dark sections.
- **Attention & Conversion:** Electric Lime (#C8EA3B) functions as the high-visibility accent, drawing user focus to primary CTAs, metric spikes, and crucial quote highlights.
- **Subtle Depth:** Desaturated pastels (Seafoam Mint #DDF2EC, Lavender #ECEBFA) structure distinct content modules without visual clutter.

## 4\. Motion Design & Interaction Choreography

The animation language relies on smooth spring-damped reveals, staggered vertical cascades, and clean state transformations.

| **Timestamp** | **Section**    | **Element / Target**        | **Trigger / Event**      | **Animation Type**        | **Motion Details & Easing**                                 | **Duration / Delay**                 |
| ------------- | -------------- | --------------------------- | ------------------------ | ------------------------- | ----------------------------------------------------------- | ------------------------------------ |
| 00:00–00:02   | Hero           | Heading text                | Page Load / Initial View | Staggered Text Reveal     | Soft upward fade (translateY: 24px → 0, opacity: 0 → 1)     | ~600ms, ease-out                     |
| ---           | ---            | ---                         | ---                      | ---                       | ---                                                         | ---                                  |
| 00:01–00:02   | Hero           | CTA Button ("Get started")  | Page Load                | Scale & Fade Entry        | Slight scale-up (0.95 → 1) + fade-in                        | ~400ms, delayed 200ms                |
| ---           | ---            | ---                         | ---                      | ---                       | ---                                                         | ---                                  |
| 00:01–00:03   | Hero           | Dashboard Card ("Cashflow") | Initial Render           | Bar Chart Grow            | Columns grow vertically from base (scaleY: 0 → 1)           | ~800ms, spring curve                 |
| ---           | ---            | ---                         | ---                      | ---                       | ---                                                         | ---                                  |
| 00:03–00:06   | Social Proof   | Partner Logos Marquee       | Continuous               | Infinite Linear Scroll    | Seamless horizontal translateX(0%) → translateX(-50%)       | ~20s linear infinite                 |
| ---           | ---            | ---                         | ---                      | ---                       | ---                                                         | ---                                  |
| 00:03–00:09   | Features Grid  | Bento Feature Cards         | Scroll into view         | Staggered Cascade Rise    | Cards slide up 30px with progressive opacity ramp           | ~500ms, 100ms stagger                |
| ---           | ---            | ---                         | ---                      | ---                       | ---                                                         | ---                                  |
| 00:10–00:13   | Calculator     | Slider & Numeric Counter    | Interaction / Demo       | Linear Track & Count-up   | Slider thumb moves left-to-right; values count to \$1544.52 | ~1200ms count-up                     |
| ---           | ---            | ---                         | ---                      | ---                       | ---                                                         | ---                                  |
| 00:14–00:16   | FAQ            | Accordion Row & Icon        | Click / Expand           | Height Expand & Rotate    | Max-height unfolds; '+' icon rotates 45° to become '−'      | ~350ms, cubic-bezier(0.4, 0, 0.2, 1) |
| ---           | ---            | ---                         | ---                      | ---                       | ---                                                         | ---                                  |
| 00:17–00:19   | Testimonial    | Quote Container & Photo     | Scroll Snap              | Smooth Parallax Zoom      | Image subtle zoom (scale 1.04 → 1) + text fade-in           | ~700ms ease                          |
| ---           | ---            | ---                         | ---                      | ---                       | ---                                                         | ---                                  |
| 00:21–00:23   | Pre-Footer CTA | Avatar Group & Action Pill  | Scroll Reveal            | Pill Pop & Avatar Stagger | Avatars scale in sequentially followed by CTA button        | ~450ms spring                        |
| ---           | ---            | ---                         | ---                      | ---                       | ---                                                         | ---                                  |

## 5\. Technical Implementation & CSS System

/\* Design Tokens: Color System \*/  
:root {  
\--color-accent-primary: #C8EA3B; /\* Electric Lime Green \*/  
\--color-accent-secondary: #E4F76E; /\* Pale Chartreuse \*/  
\--color-accent-mint: #DDF2EC; /\* Soft Seafoam \*/  
\--color-accent-lavender: #ECEBFA; /\* Soft Lavender \*/  
\--color-forest-dark: #1A2614; /\* Primary Dark Typography \*/  
\--color-forest-base: #213318; /\* Button & Core Dark Background \*/  
\--color-forest-surface: #273C1E; /\* FAQ & Testimonial Container \*/  
\--color-forest-footer: #1E2D17; /\* Footer Background \*/  
\--color-forest-border: #37502B; /\* Dark Section Divider \*/  
\--color-bg-light: #FFFFFF; /\* Main Page Canvas \*/  
\--color-surface-light: #F8F9F6; /\* Neutral Card Surface \*/  
\--color-border-light: #E3E8DF; /\* Neutral Card Border \*/  
\--color-text-primary: #1A2614; /\* Dark text on light bg \*/  
\--color-text-muted: #586650; /\* Gray/olive muted body \*/  
\--color-text-inverse: #FFFFFF; /\* Crisp white text \*/  
\--color-text-inverse-muted: #C5D7BD; /\* Pale sage text on dark bg \*/  
\--color-text-footer: #7E9473; /\* Muted footer navigation \*/  
}  
<br/>/\* Keyframe Animations \*/  
@keyframes fadeInUp {  
0% {  
opacity: 0;  
transform: translateY(28px);  
}  
100% {  
opacity: 1;  
transform: translateY(0);  
}  
}  
<br/>@keyframes marquee {  
0% { transform: translateX(0%); }  
100% { transform: translateX(-50%); }  
}  
<br/>@keyframes growBar {  
from { transform: scaleY(0); }  
to { transform: scaleY(1); }  
}  
<br/>.reveal-element {  
animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;  
}  
<br/>.faq-toggle-icon {  
transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);  
}  
<br/>.faq-item\[data-state="open"\] .faq-toggle-icon {  
transform: rotate(45deg);  
}

## 6\. Final Color Reference Quick Guide

- **Electric Lime (Key CTA / Accent):** #C8EA3B
- **Deep Forest Olive (Primary Dark / Text / Buttons):** #213318
- **Pure White (Canvas Background / Cards):** #FFFFFF
- **Pale Chartreuse (Interactive Calculator Card):** #E4F76E
- **FAQ Dark Olive Background:** #273C1E
- **Muted Sage Text (Dark Surface Body Copy):** #C5D7BD
- **Soft Mint Accent Tile:** #DDF2EC
- **Soft Lavender Accent Tile:** #ECEBFA