# SANKET | संकेत
## *Reimagined Layout — Full Structure Document with Color System*
> Predict. Prepare. Protect.

---

## ◈ MASTER COLOR PALETTE

### Brand Tokens

```css
:root {
  /* ── Accent Colors ── */
  --color-accent-primary:    #C8EA3B;   /* Electric Lime Green — CTAs on dark, metric tags, active states */
  --color-accent-secondary:  #E4F76E;   /* Pale Chartreuse — hover tint, banner fills, calculator card bg */
  --color-accent-mint:       #DDF2EC;   /* Soft Seafoam — secondary feature tiles, light surface tint */
  --color-accent-lavender:   #ECEBFA;   /* Soft Lavender — secondary feature tiles, alt surface tint */

  /* ── Forest / Dark Theme ── */
  --color-forest-dark:       #1A2614;   /* Primary dark typography, headings on light bg */
  --color-forest-base:       #213318;   /* Hero bg, CTA buttons on light bg, dark canvas anchor */
  --color-forest-surface:    #273C1E;   /* FAQ container, testimonial overlay, dark section bg */
  --color-forest-footer:     #1E2D17;   /* Footer background */
  --color-forest-border:     #37502B;   /* Dividers on dark surfaces */

  /* ── Light Theme / Neutrals ── */
  --color-bg-light:          #FFFFFF;   /* Main page canvas */
  --color-surface-light:     #F8F9F6;   /* Card fills, module backdrops */
  --color-border-light:      #E3E8DF;   /* Card borders, input borders on light bg */

  /* ── Typography ── */
  --color-text-primary:      #1A2614;   /* Body copy & headings on light bg */
  --color-text-muted:        #586650;   /* Secondary body, captions on light bg */
  --color-text-inverse:      #FFFFFF;   /* Headings & labels on dark bg */
  --color-text-inverse-muted:#C5D7BD;   /* Body copy on dark bg */
  --color-text-footer:       #7E9473;   /* Footer nav links, muted footer text */

  /* ── Semantic / Risk Level Colors ── */
  --risk-normal:             #C8EA3B;   /* Normal — Electric Lime (on-brand) */
  --risk-watch:              #F5C518;   /* Watch — Amber Yellow */
  --risk-warning:            #F07B20;   /* Warning — Burnt Orange */
  --risk-danger:             #E03030;   /* Danger — Signal Red */

  --risk-normal-bg:          rgba(200,234,59,0.12);
  --risk-watch-bg:           rgba(245,197,24,0.12);
  --risk-warning-bg:         rgba(240,123,32,0.12);
  --risk-danger-bg:          rgba(224,48,48,0.12);
}
```

### Visual Hierarchy Summary

| Role | Color | Hex | Usage |
|---|---|---|---|
| **Primary Dark** | Deep Forest Olive | `#213318` | Hero bg, dark section canvases, light-bg CTA buttons |
| **Primary Light** | Pure White | `#FFFFFF` | Page canvas, card fills, inverse text |
| **Key Accent** | Electric Lime Green | `#C8EA3B` | CTAs on dark, active states, metric badges, FAQ headers |
| **Dark Typography** | Dark Spruce | `#1A2614` | All headings & body on light backgrounds |
| **Muted Body** | Sage Muted | `#586650` | Supporting copy on light backgrounds |
| **Dark Body** | Pale Sage | `#C5D7BD` | Body copy on dark/forest backgrounds |
| **Surface Card** | Off-White | `#F8F9F6` | Card backgrounds, module backdrops |
| **Mint Tile** | Soft Seafoam | `#DDF2EC` | Secondary feature tiles (alt 1) |
| **Lavender Tile** | Soft Lavender | `#ECEBFA` | Secondary feature tiles (alt 2) |
| **FAQ/Testimonial bg** | Dark Olive | `#273C1E` | Dark section containers |
| **Footer bg** | Deepest Forest | `#1E2D17` | Footer canvas |
| **Chartreuse Hover** | Pale Chartreuse | `#E4F76E` | Hover tint on lime accent, calculator card bg |
| **Dark Divider** | Forest Border | `#37502B` | Dividers on dark surfaces |
| **Light Divider** | Sage Border | `#E3E8DF` | Dividers & borders on light surfaces |

---

## ◈ GLOBAL TYPOGRAPHY SYSTEM

| Role | Font | Weight | Size | Color |
|---|---|---|---|---|
| **Display Headline** | Space Grotesk | 700 | 56–72px | `#1A2614` (light) / `#FFFFFF` (dark) |
| **Section Headline** | Space Grotesk | 600 | 36–48px | `#1A2614` (light) / `#FFFFFF` (dark) |
| **Card Headline** | Space Grotesk | 600 | 20–24px | `#1A2614` (light) / `#FFFFFF` (dark) |
| **Body Copy** | Inter | 400 | 16px | `#586650` (light) / `#C5D7BD` (dark) |
| **Captions / Labels** | Inter | 500 | 13px | `#586650` (light) / `#7E9473` (dark) |
| **Monospaced / Data** | JetBrains Mono | 500 | 13–14px | `#C8EA3B` on dark / `#213318` on light |
| **Nav Links** | Inter | 500 | 15px | `#1A2614` (transparent navbar) / `#FFFFFF` (scrolled dark navbar) |
| **CTA Button Text** | Space Grotesk | 600 | 15px | `#213318` on lime / `#FFFFFF` on forest |

---

## ◈ GLOBAL BUTTON SYSTEM

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| **Primary (dark bg)** | `#C8EA3B` | `#1A2614` | none | `#E4F76E` |
| **Primary (light bg)** | `#213318` | `#FFFFFF` | none | `#1A2614` |
| **Secondary / Ghost** | transparent | `#1A2614` | `1.5px #E3E8DF` | `#F8F9F6` fill |
| **Ghost Inverse** | transparent | `#FFFFFF` | `1.5px rgba(255,255,255,0.3)` | `rgba(255,255,255,0.08)` fill |
| **Text Link** | none | `#C8EA3B` (dark) / `#213318` (light) | none | underline |

---

## ◈ NAVBAR

**Position:** Sticky · Transparent on hero → frosted/dark on scroll

### Color Spec

| State | Background | Logo | Nav Links | CTA Button |
|---|---|---|---|---|
| **Transparent (hero)** | `transparent` | `#FFFFFF` | `#FFFFFF` | Lime `#C8EA3B` · text `#1A2614` |
| **Scrolled / Frosted** | `#1A2614` @ 92% opacity + `backdrop-filter: blur(16px)` | `#FFFFFF` | `#C5D7BD` · hover `#FFFFFF` | Lime `#C8EA3B` · text `#1A2614` |
| **Mega-menu dropdown** | `#213318` | — | `#C5D7BD` · hover `#C8EA3B` | — |
| **Mobile menu panel** | `#1A2614` | `#FFFFFF` | `#FFFFFF` | Lime `#C8EA3B` |

| Zone | Content |
|---|---|
| **Left** | `SANKET · संकेत` logo + *"Predict. Prepare. Protect."* tagline below |
| **Center** | Mega-menu (see below) |
| **Right** | `Risk Map` link · `About` link · `Request Demo` filled CTA button |
| **Mobile** | Hamburger → Menu / Close toggle |
| **Fixed element** | Risk-level live pill bottom-left — `● Monitoring Active` (pulsing) |
| **Fixed element** | Contact / WhatsApp floating button bottom-right |

### Floating Fixed Elements

| Element | Background | Text | Border | Behavior |
|---|---|---|---|---|
| `● Monitoring Active` pill | `#213318` | `#C8EA3B` | `1px #37502B` | Dot pulses lime every 2s |
| WhatsApp float button | `#25D366` | `#FFFFFF` | none | Drop shadow hover lift |
| Cookie banner | `#1A2614` | `#C5D7BD` · accept `#C8EA3B` | `1px #37502B` top | Fixed bottom-center |

### Mega Menu — Dropdowns

**Platform dropdown** — two sub-columns:

*Intelligence Layers*
- AI Risk Assessment
- Computer Vision
- Satellite Monitoring
- GIS Risk Maps

*Data Sources*
- Rainfall Data
- Soil Moisture
- Terrain Analysis
- Historical Records

**Solutions dropdown:**
- Early Warning Alerts
- Field Reporting
- Risk Dashboard
- Alert Channels

**Who It's For dropdown:**
- Disaster Authorities
- Road Agencies
- Emergency Teams
- Field Teams
- Communities

---

## ◈ SECTIONS

---

### 01 · HERO

**Layout:** Full-width · Dark background · Animated satellite terrain imagery overlay

#### Color Spec

| Element | Color / Value |
|---|---|
| **Section background** | `#213318` with satellite terrain image overlay at `rgba(33,51,24,0.72)` |
| **Heading** | `#FFFFFF` |
| **Subtext** | `#C5D7BD` |
| **Tagline pill** | bg `rgba(200,234,59,0.12)` · text `#C8EA3B` · border `1px rgba(200,234,59,0.3)` |
| **Primary CTA button** | bg `#C8EA3B` · text `#1A2614` · hover bg `#E4F76E` |
| **Secondary CTA link** | `#C8EA3B` · arrow `→` inline |
| **GIS map dashboard card** | bg `#1A2614` · border `1px #37502B` · subtle inner glow `rgba(200,234,59,0.06)` |
| **Chart/map accent highlights** | `#C8EA3B` data bars · `#213318` zone fills |

| Element | Content |
|---|---|
| **Headline** | `Predict Landslides Before They Happen.` — large, center-aligned, multi-line |
| **Subtext** | SANKET combines satellite, rainfall, terrain and AI to identify risk and deliver timely warnings |
| **Tagline pill** | `Observe · Predict · Prepare · Protect` |
| **Primary CTA** | `See How It Works` — filled button, scrolls to Section 07 |
| **Secondary CTA** | `View Risk Map →` — text link |
| **Below fold** | Full-width animated GIS risk map dashboard screenshot |

---

### 02 · STATS BAR

**Layout:** Tight horizontal row · Dark background · Numbers animate up on scroll

#### Color Spec

| Element | Color |
|---|---|
| **Section background** | `#1A2614` |
| **Stat numbers** | `#C8EA3B` (Electric Lime) |
| **Stat labels** | `#C5D7BD` |
| **Dividers between stats** | `1px #37502B` vertical |

| Stat | Label |
|---|---|
| `4` | Risk Levels |
| `6+` | Data Sources |
| `24/7` | Continuous Monitoring |
| `5` | Alert Channels |
| `100%` | Location-Specific Risk |

---

### 03 · BENEFICIARY MARQUEE

**Layout:** Infinite auto-scroll ticker · Single row · Muted/subtle treatment

#### Color Spec

| Element | Color |
|---|---|
| **Section background** | `#FFFFFF` |
| **Top border line** | `1px #E3E8DF` |
| **Badge background** | `#F8F9F6` |
| **Badge border** | `1px #E3E8DF` |
| **Badge text / icon** | `#586650` |
| **Fade gradients (left/right)** | `linear-gradient(to right, #FFFFFF, transparent)` |

**Content:** Institution type badges with icons scrolling continuously —

> Disaster Management · Road Agencies · Emergency Response · Field Teams · State Governments · Local Communities · Infrastructure Bodies

*Not a client logo wall — a "designed for these institutions" strip.*

---

### 04 · CREDIBILITY / PROOF CARDS

**Layout:** 2-column grid · Each card = background image + badge + headline + description + link

#### Color Spec

| Element | Color |
|---|---|
| **Section background** | `#F8F9F6` |
| **Card background** | `#FFFFFF` |
| **Card border** | `1px #E3E8DF` |
| **Card image overlay** | `rgba(33,51,24,0.55)` gradient over image |
| **Badge — SIH** | bg `#C8EA3B` · text `#1A2614` · font-weight 600 |
| **Badge — Gov Aligned** | bg `#213318` · text `#FFFFFF` |
| **Card headline** | `#FFFFFF` (on image overlay) |
| **Card description** | `rgba(255,255,255,0.80)` |
| **Link arrow** | `#C8EA3B` |

| Card | Badge | Headline | Description | Link |
|---|---|---|---|---|
| **Left** | `Smart India Hackathon` | Built as a national-level solution for India's disaster risk challenge | Selected for SIH — one of the country's largest innovation programs | `View the project →` |
| **Right** | `Government-Aligned` | Designed to integrate with NDMA and state disaster management workflows | Built around the operational needs of real government response teams | `Learn more →` |

---

### 05 · PROBLEM — RISK PROGRESSION CAROUSEL

**Layout:** Horizontal carousel · 1 stage active at a time · Color bar fills red as stages progress

#### Color Spec

| Element | Color |
|---|---|
| **Section background** | `#FFFFFF` |
| **Section heading** | `#1A2614` |
| **Section subtext** | `#586650` |
| **Card background (inactive)** | `#F8F9F6` · border `1px #E3E8DF` |
| **Card background (active)** | `#FFFFFF` · border `1.5px #C8EA3B` · shadow `0 4px 24px rgba(200,234,59,0.12)` |
| **Stage pill (inactive)** | bg `#F8F9F6` · text `#586650` |
| **Stage pill (active)** | bg matches risk dot color at 12% opacity · text matches risk dot color |
| **Card headline** | `#1A2614` |
| **Card description** | `#586650` |
| **Progress bar track** | `#E3E8DF` |
| **Progress bar fill** | gradient `#C8EA3B → #F5C518 → #F07B20 → #E03030` per stage |
| **Progress indicator text** | `#586650` |

#### Risk Dot Colors per Stage

| Stage | Risk Dot | Dot Color |
|---|---|---|
| Stage 1 — Heavy Rainfall | `●` | `#C8EA3B` — Lime (Normal) |
| Stage 2 — Soil Saturation | `●` | `#F5C518` — Amber (Watch) |
| Stage 3 — Slope Instability | `●` | `#F07B20` — Orange (Warning) |
| Stage 4 — Ground Changes | `●` | `#F07B20` — Orange (Warning) |
| Stage 5 — Landslide | `●` | `#E03030` — Red (Danger) |

**Headline:** `The Risk Builds Before the Disaster.`
**Subtext:** Landslides rarely happen without warning — detecting those warnings is the hard part.

Each card contains:
- Top-left pill label e.g. `Heavy Rainfall · Stage 1 of 5`
- Color-coded risk dot (green → yellow → orange → red)
- Bold headline
- 1–2 line description
- Right side: illustrative icon/diagram
- Progress indicator: `1 / 5`

| Stage | Pill Label | Headline | Description |
|---|---|---|---|
| 1 | `Heavy Rainfall · Stage 1 of 5` | Precipitation saturates the ground rapidly | Intense or prolonged rainfall begins pushing soil moisture beyond normal absorption capacity |
| 2 | `Soil Saturation · Stage 2 of 5` | Water accumulation weakens soil cohesion | Saturated soil loses structural integrity, increasing pore water pressure within the slope |
| 3 | `Slope Instability · Stage 3 of 5` | Vulnerable slopes become progressively unstable | Shear stress begins to exceed shear strength — the slope enters a critical zone |
| 4 | `Ground Changes · Stage 4 of 5` | Cracks, debris and surface deformation appear | Physical indicators emerge — detectable by satellite imagery and ground observation |
| 5 | `Landslide · Stage 5 of 5` | Instability develops into a destructive event | Mass movement occurs — infrastructure, roads and communities in the path are at risk |

---

### 06 · KEY PROBLEMS GRID

**Layout:** 3-card row · Icon + title + description

#### Color Spec

| Element | Color |
|---|---|
| **Section background** | `#F8F9F6` |
| **Section heading** | `#1A2614` |
| **Card background** | `#FFFFFF` |
| **Card border** | `1px #E3E8DF` |
| **Card border-top accent** | `3px #C8EA3B` (top edge of each card) |
| **Icon container** | bg `rgba(200,234,59,0.12)` · icon color `#213318` |
| **Card title** | `#1A2614` font-weight 600 |
| **Card description** | `#586650` |

**Headline:** `Why Current Systems Fall Short.`

| # | Icon | Title | Description |
|---|---|---|---|
| 1 | 🗂️ | **Fragmented Data** | Environmental, satellite and geospatial data sit in separate silos across agencies — no unified risk picture exists |
| 2 | ⏱️ | **Delayed Detection** | Early indicators are difficult to spot and analyze before conditions turn critical and damage is done |
| 3 | ❓ | **Unclear Decision-Making** | Authorities need location-specific, actionable intelligence — not disconnected raw data dumps |

---

### 07 · SOLUTION OVERVIEW — TABBED PROCESS STEPPER

**Layout:** 5-phase vertical stepper · Each phase expands on click · Image on right side

#### Color Spec

| Element | Color |
|---|---|
| **Section background** | `#FFFFFF` |
| **Section heading** | `#1A2614` |
| **Section subtext** | `#586650` |
| **Phase tab (inactive)** | bg `#F8F9F6` · border `1px #E3E8DF` · text `#586650` |
| **Phase tab (active)** | bg `#213318` · text `#FFFFFF` · badge text `#C8EA3B` |
| **Phase badge** | `#C8EA3B` text on active tab |
| **Expanded panel bg** | `#F8F9F6` · border-left `3px #C8EA3B` |
| **Phase headline (expanded)** | `#1A2614` |
| **Bullet points** | dot `#C8EA3B` · text `#586650` |
| **Primary CTA link** | `#213318` font-weight 600 · underline hover |
| **Secondary CTA link** | `#C8EA3B` text |
| **Right-side image panel** | bg `#1A2614` · border `1px #37502B` · corner radius 12px |
| **Stepper connector line** | `#E3E8DF` vertical line · active segment `#C8EA3B` |

**Headline:** `Meet SANKET.`
**Subtext:** From scattered environmental data to actionable risk intelligence.

Each phase contains:
- Phase badge top-left e.g. `OBSERVE · Phase 1 of 5`
- Bold headline
- 3 capability bullets
- Two CTA links
- Right side: illustrative image/diagram

| Phase | Badge | Headline | Bullets | CTAs |
|---|---|---|---|---|
| **OBSERVE** | Phase 1 of 5 | Monitor every signal that matters | Satellite imagery ingestion · Rainfall and soil moisture feeds · Visual ground report collection | `Explore Data Sources` · `See Capabilities →` |
| **ANALYZE** | Phase 2 of 5 | Process multi-source data through AI pipelines | Multi-layer data alignment and cleaning · ML model inference on environmental inputs · Anomaly and threshold detection | `View AI Capabilities` · `Learn More →` |
| **PREDICT** | Phase 3 of 5 | Generate location-specific risk scores | Landslide susceptibility scoring per zone · Risk trend tracking over time · GIS-based spatial output | `Explore Risk Maps` · `See How →` |
| **ALERT** | Phase 4 of 5 | Translate elevated risk into tiered warnings | Multi-level alert classification · Risk-to-action mapping per stakeholder · Multi-channel notification dispatch | `View Alert System` · `Learn More →` |
| **RESPOND** | Phase 5 of 5 | Equip teams with the right information to act | Clear risk summaries for decision-makers · Field team task coordination support · Post-event monitoring and recovery data | `Who Benefits?` · `Request Demo →` |

---

### 08 · CORE CAPABILITIES — HORIZONTAL SCROLL CAROUSEL

**Layout:** Auto-carousel · 1 active at a time · Progress indicator `1 / 6`

#### Color Spec

| Element | Color |
|---|---|
| **Section background** | `#1A2614` |
| **Section heading** | `#FFFFFF` |
| **Section subtext** | `#C5D7BD` |
| **Card background (inactive)** | `#213318` · border `1px #37502B` |
| **Card background (active)** | `#273C1E` · border `1.5px #C8EA3B` |
| **Category pill** | bg `rgba(200,234,59,0.12)` · text `#C8EA3B` · border `1px rgba(200,234,59,0.25)` |
| **SANKET tag (top-right)** | bg `rgba(255,255,255,0.06)` · text `#7E9473` |
| **Card headline** | `#FFFFFF` |
| **Card description** | `#C5D7BD` |
| **Learn more link** | `#C8EA3B` |
| **Progress indicator dots** | inactive `#37502B` · active `#C8EA3B` |
| **Visual/diagram area** | bg `#1A2614` · accent elements `#C8EA3B` |

**Headline:** `Intelligence Built for Landslide Risk Monitoring.`
**Subtext:** Predictive analytics, remote sensing, computer vision and geospatial intelligence — in one platform.

Each card contains:
- Top-left category pill
- Top-right `SANKET` tag
- Bold how-style headline
- 1-line description
- `Learn more →` link
- Right side: visual/diagram

| # | Pill | Headline | Description |
|---|---|---|---|
| 1 | `AI` | How AI models assess landslide susceptibility from multi-source environmental data | Continuous risk scoring across terrain zones using rainfall, soil and historical inputs |
| 2 | `Remote Sensing` | How satellite monitoring detects terrain shifts and surface changes at scale | Sentinel-2 and similar imagery processed to track vegetation loss, slope movement and ground change |
| 3 | `Computer Vision` | How computer vision identifies cracks, debris and blockages in ground and aerial imagery | Trained CV models analyze uploaded and satellite imagery for physical landslide indicators |
| 4 | `GIS` | How dynamic risk maps visualize where risk is rising across vulnerable regions | PostGIS-powered spatial layers showing risk zones, roads and infrastructure in real time |
| 5 | `Early Warning` | How SANKET converts elevated risk scores into understandable, tiered alerts | Multi-channel warnings dispatched when combined indicators cross defined thresholds |
| 6 | `Field Intelligence` | How field reports feed ground-truth observations back into the AI risk picture | Geo-tagged photos and observations submitted from the field and fused with existing data |

---

### 09 · AI + COMPUTER VISION — DEEP DIVE

**Layout:** Two-panel split · Pull quote centered below

**Headline:** `AI Sees What Humans Might Miss.`
**Subtext:** SANKET uses computer vision to analyze imagery for visual indicators that strengthen risk assessment and situational awareness.

#### Color Spec

| Element | Color |
|---|---|
| **Section background** | `#FFFFFF` |
| **Section heading** | `#1A2614` |
| **Section subtext** | `#586650` |
| **Left panel bg** | `#F8F9F6` · border `1px #E3E8DF` · radius 12px |
| **Right panel bg** | `#F8F9F6` · border `1px #E3E8DF` · radius 12px |
| **Panel heading** | `#1A2614` font-weight 600 |
| **Flow step boxes** | bg `#FFFFFF` · border `1px #E3E8DF` · text `#1A2614` |
| **Flow connector arrows** | `#C8EA3B` |
| **Detection output chips — Red** | bg `rgba(224,48,48,0.10)` · text `#E03030` · border `1px rgba(224,48,48,0.25)` |
| **Detection output chips — Orange** | bg `rgba(240,123,32,0.10)` · text `#F07B20` · border `1px rgba(240,123,32,0.25)` |
| **Before/After toggle button** | bg `#213318` · text `#FFFFFF` · active segment `#C8EA3B` text |
| **Pull quote text** | `#1A2614` font-style italic |
| **Pull quote border-left** | `3px #C8EA3B` |

#### Left Panel — Ground Image Analysis

```
Ground / Road Photo
        ↓
  Upload to SANKET
        ↓
   CV Model Analysis
        ↓
   Output Detection Labels
```

**Detection output chips:**
- `🔴 Crack Detected`
- `🟠 Debris Detected`
- `🔴 Landslide Area`
- `🟠 Road Blockage`

#### Right Panel — Satellite Image Analysis

```
Satellite Image
        ↓
  Image Preprocessing
        ↓
  Segmentation Model
        ↓
  Landslide Area Mapped on GIS Layer
```

Visual: Before / After toggle — raw satellite image → segmentation mask overlaid

#### Pull Quote

> *"Environmental data tells us what is changing. Visual intelligence shows us where."*

---

### 10 · EARLY WARNING SYSTEM

**Layout:** Left-right split + alert level table + channel cards at bottom

**Headline:** `From Prediction to Action.`
**Subtext:** Identifying risk is only the first step. SANKET converts elevated risk into understandable alerts that support timely monitoring and response.

#### Color Spec

| Element | Color |
|---|---|
| **Section background** | `#F8F9F6` |
| **Section heading** | `#1A2614` |
| **Section subtext** | `#586650` |
| **Left flow panel bg** | `#213318` · border `1px #37502B` · radius 12px |
| **Flow step labels** | `#C5D7BD` |
| **Flow connector arrows** | `#C8EA3B` |
| **Risk table bg** | `#FFFFFF` · border `1px #E3E8DF` |
| **Table header** | bg `#F8F9F6` · text `#1A2614` font-weight 600 |
| **Table row text** | `#1A2614` (level) · `#586650` (description) |
| **Normal row dot** | `#C8EA3B` |
| **Watch row dot** | `#F5C518` |
| **Warning row dot** | `#F07B20` |
| **Danger row dot** | `#E03030` |
| **Normal row bg** | `rgba(200,234,59,0.06)` |
| **Watch row bg** | `rgba(245,197,24,0.06)` |
| **Warning row bg** | `rgba(240,123,32,0.06)` |
| **Danger row bg** | `rgba(224,48,48,0.06)` |
| **Alert channel card bg** | `#FFFFFF` · border `1px #E3E8DF` · radius 12px |
| **Channel icon container** | bg `rgba(200,234,59,0.12)` · icon `#213318` |
| **Channel title** | `#1A2614` |
| **Channel description** | `#586650` |

#### Left — Alert Trigger Logic (visual flow)

```
Risk Score Rises
        ↓
Multiple Indicators Align
        ↓
Threshold Crossed
        ↓
Alert Generated & Dispatched
```

#### Center — Risk Level → Action Table

| Level | Color | Meaning | Recommended Action |
|---|---|---|---|
| `Normal` | 🟢 `#C8EA3B` | No significant risk indicators | Routine monitoring only |
| `Watch` | 🟡 `#F5C518` | Some indicators elevated | Increase observation frequency |
| `Warning` | 🟠 `#F07B20` | Multiple indicators elevated | Notify authorities, prepare response teams |
| `Danger` | 🔴 `#E03030` | Critical risk threshold reached | Immediate action, consider evacuation |

#### Bottom — 4 Alert Channel Cards (icon grid)

| Channel | Icon | Description |
|---|---|---|
| **SMS** | 📱 | Direct text alerts to registered contacts |
| **Email** | 📧 | Detailed risk summaries with location data |
| **Mobile App** | 📲 | Push notifications with live map view |
| **Voice Alert** | 🔊 | Automated calls for high-priority warnings |

---

### 11 · FIELD REPORTING — 4-STEP FLOW

**Layout:** Horizontal stepper · Icon + label + description · Image on right per step

**Headline:** `Ground Reality Meets AI Intelligence.`
**Subtext:** Remote sensing gives the broad view. Field reports add what satellites miss.

#### Color Spec

| Element | Color |
|---|---|
| **Section background** | `#FFFFFF` |
| **Section heading** | `#1A2614` |
| **Section subtext** | `#586650` |
| **Step badge (inactive)** | bg `#F8F9F6` · border `1px #E3E8DF` · text `#586650` |
| **Step badge (active)** | bg `#C8EA3B` · text `#1A2614` font-weight 600 |
| **Step connector line** | `#E3E8DF` · completed segment `#C8EA3B` |
| **Step icon container** | bg `#F8F9F6` · border `1px #E3E8DF` · icon `#213318` |
| **Step icon (active)** | bg `#213318` · icon `#C8EA3B` |
| **Step title** | `#1A2614` font-weight 600 |
| **Step description** | `#586650` |
| **Right image panel** | bg `#1A2614` · border `1px #37502B` · radius 12px |
| **Supporting quote** | italic `#586650` · left border `3px #C8EA3B` |

| Step | Badge | Icon | Title | Description |
|---|---|---|---|---|
| 1 | `CAPTURE · Step 1 of 4` | 📷 | Photograph the Evidence | Field personnel capture cracks, debris, road damage or any visible surface change at a precise location |
| 2 | `GEO-TAG · Step 2 of 4` | 📍 | Attach Precise Location | GPS coordinates are automatically embedded in the report — no manual entry required |
| 3 | `SUBMIT · Step 3 of 4` | 📤 | Send to the Platform | The report is transmitted directly to SANKET — no separate systems or data transfer steps |
| 4 | `ANALYZE · Step 4 of 4` | 🧠 | Update the Risk Picture | Visual evidence is processed alongside existing risk data and can immediately update the assessment for that location |

**Supporting line:**
> *Field reports can confirm what satellite data suggests — or catch what satellite data misses.*

---

### 12 · WHO BENEFITS — 6-CARD GRID

**Layout:** 2×3 grid · Icon + bold role + 2-line use case

**Headline:** `Built for Those Who Need to Act Early.`

#### Color Spec

| Element | Color |
|---|---|
| **Section background** | `#F8F9F6` |
| **Section heading** | `#1A2614` |
| **Card background** | `#FFFFFF` |
| **Card border** | `1px #E3E8DF` |
| **Card hover border** | `1.5px #C8EA3B` |
| **Card hover shadow** | `0 4px 20px rgba(200,234,59,0.10)` |
| **Icon container** | alternating `#DDF2EC` (Mint) / `#ECEBFA` (Lavender) / `#E4F76E` (Chartreuse) per row |
| **Icon** | `#213318` |
| **Card role title** | `#1A2614` font-weight 600 |
| **Card use case text** | `#586650` |

#### Card Icon Background Pattern (alternating tiles)

| Card # | Icon bg |
|---|---|
| 1 — Disaster Authorities | `#DDF2EC` (Mint) |
| 2 — Road Agencies | `#ECEBFA` (Lavender) |
| 3 — Emergency Teams | `rgba(200,234,59,0.15)` (Lime tint) |
| 4 — Field Teams | `#DDF2EC` (Mint) |
| 5 — Local Communities | `#ECEBFA` (Lavender) |
| 6 — Any Region | `rgba(200,234,59,0.15)` (Lime tint) |

| # | Icon | Role | Use Case |
|---|---|---|---|
| 1 | 🏛️ | **Disaster Management Authorities** | Monitor multiple vulnerable zones simultaneously, understand changing risk and prioritize where to direct resources |
| 2 | 🛣️ | **Infrastructure & Road Agencies** | Identify roads, bridges and critical infrastructure at elevated risk before damage or blockage occurs |
| 3 | 🚨 | **Emergency Response Teams** | Access real-time risk information to support preparedness decisions and coordinate faster, more targeted response |
| 4 | 🧑‍🏫 | **Field Teams** | Submit geo-tagged observations and photographs directly from the ground into the platform with minimal friction |
| 5 | 🏘️ | **Local Communities** | Receive clear, understandable warnings when risk conditions in their specific area are increasing |
| 6 | 🌏 | **Any Region Facing Landslide Risk** | SANKET is designed to be deployed across any geographically vulnerable region with sufficient data availability |

---

### 13 · WHY SANKET — DIFFERENTIATOR GRID

**Layout:** 2×2 card grid + centered pull quote below

**Headline:** `More Than Detection. Built for Early Action.`
**Subtext:** SANKET brings multiple layers of intelligence together so risk can be understood earlier, visualized clearly and acted on more effectively.

#### Color Spec

| Element | Color |
|---|---|
| **Section background** | `#213318` |
| **Section heading** | `#FFFFFF` |
| **Section subtext** | `#C5D7BD` |
| **Card background** | `#273C1E` · border `1px #37502B` · radius 12px |
| **Card hover border** | `1.5px #C8EA3B` |
| **Card number badge** | text `#C8EA3B` font-size 13px font-weight 600 (e.g. `01`) |
| **Card title** | `#FFFFFF` font-weight 600 |
| **Card description** | `#C5D7BD` |
| **Pull quote text** | `#C8EA3B` font-style italic font-size 22px |
| **Pull quote attribution line** | `#7E9473` |

| # | Title | Description |
|---|---|---|
| 1 | **Multi-Source Intelligence** | Satellite, rainfall, soil moisture, terrain and historical data unified in one system — no more fragmented sources or manual correlation |
| 2 | **AI + Computer Vision** | Predictive risk modeling paired with visual evidence analysis — environmental data and imagery working together |
| 3 | **Location-Aware Risk** | GIS-based visualization makes it clear *where* risk is rising, not just that it is rising somewhere in a region |
| 4 | **Actionable Warnings** | Risk scores are translated into clear warning levels and recommended actions — not raw data handed to overwhelmed teams |

**Pull quote:**
> *"One platform. Multiple signals. Clearer decisions."*

---

### 14 · TECH STACK MARQUEE

**Layout:** Two infinite auto-scroll rows · Icon + label · Continuously looping

**Headline:** `Powered By`
**Subtext:** The technology stack behind SANKET's intelligence pipeline.

#### Color Spec

| Element | Color |
|---|---|
| **Section background** | `#F8F9F6` |
| **Section heading** | `#1A2614` |
| **Section subtext** | `#586650` |
| **Row 1 badge bg** | `#FFFFFF` · border `1px #E3E8DF` |
| **Row 1 badge text** | `#1A2614` font-weight 500 |
| **Row 2 badge bg** | `#F8F9F6` · border `1px #E3E8DF` |
| **Row 2 badge text** | `#586650` |
| **Fade gradients (left/right)** | `linear-gradient(to right, #F8F9F6, transparent)` |
| **Row scroll direction** | Row 1 → left · Row 2 → right (opposite) |

**Row 1 — AI / ML / Data:**

> Python · TensorFlow · PyTorch · Scikit-learn · OpenCV · LangChain · Sentinel-2 · NDVI · Rasterio · GeoPandas

**Row 2 — Platform / Infrastructure:**

> FastAPI · PostgreSQL · PostGIS · React · Next.js · Mapbox · Leaflet · Supabase · Docker · Vercel · AWS · Git

---

### 15 · CONTACT / FINAL CTA

**Layout:** Left-right split · Contact info left · Form right

**Headline:** `Don't Wait for the Landslide.`
**Subtext:** Turn environmental and geospatial data into actionable risk intelligence.
**Tagline:** `Predict. Prepare. Protect.`

#### Color Spec

| Element | Color |
|---|---|
| **Section background** | `#273C1E` |
| **Section heading** | `#FFFFFF` |
| **Section subtext** | `#C5D7BD` |
| **Tagline text** | `#C8EA3B` font-weight 600 |
| **Left column — contact label** | `#7E9473` font-size 12px uppercase tracking-wide |
| **Left column — contact value** | `#FFFFFF` |
| **Left column — dividers** | `1px #37502B` |
| **`We are here` tag** | bg `rgba(200,234,59,0.12)` · text `#C8EA3B` · border `1px rgba(200,234,59,0.25)` · dot pulse |
| **Form card background** | `#213318` · border `1px #37502B` · radius 12px |
| **Input field bg** | `rgba(255,255,255,0.06)` |
| **Input border** | `1px #37502B` · focus `1px #C8EA3B` |
| **Input text** | `#FFFFFF` |
| **Input placeholder** | `#7E9473` |
| **Submit button** | bg `#C8EA3B` · text `#1A2614` font-weight 600 · hover bg `#E4F76E` |

#### Left — Contact Info

| **Inquiries** | Shazankhan324@gmail.com |
| **Built for** | Smart India Hackathon |
| **GitHub** | github.com/itzshazan |
| **Tag** | `We are here` |

#### Right — Demo Request Form

| Field | Type |
|---|---|
| Full Name | Text input |
| Organization | Text input |
| Role | Text input |
| Message | Textarea |
| — | `Request Demo` submit button |

---

## ◈ FOOTER

**Top-left:** SANKET · संकेत white logo + *"Predict. Prepare. Protect."* tagline

### Color Spec

| Element | Color |
|---|---|
| **Footer background** | `#1E2D17` |
| **Top border** | `1px #37502B` |
| **Logo / brand text** | `#FFFFFF` |
| **Tagline under logo** | `#C5D7BD` |
| **Column headings** | `#FFFFFF` font-weight 600 font-size 13px |
| **Nav links** | `#7E9473` · hover `#C5D7BD` |
| **`Request a Demo` button** | bg `#C8EA3B` · text `#1A2614` font-weight 600 · hover bg `#E4F76E` |
| **Bottom bar bg** | `#1A2614` |
| **Bottom bar text** | `#7E9473` |
| **Bottom bar links** | `#7E9473` · hover `#C5D7BD` |
| **Social icons** | `#7E9473` · hover `#C5D7BD` |
| **Divider (bottom bar)** | `1px #37502B` top |

### 4-Column Layout

| Platform | Solutions | Who It's For | Project |
|---|---|---|---|
| AI Risk Assessment | Early Warning Alerts | Disaster Authorities | About |
| Satellite Monitoring | Risk Dashboard | Road Agencies | SIH Hackathon |
| Computer Vision | Field Reporting | Emergency Teams | GitHub |
| GIS Risk Maps | Alert Channels | Field Teams | Documentation |
| Data Sources | — | Communities | — |

**Footer CTA button:** `Request a Demo`

**Bottom bar:**
`© 2025 SANKET · संकेत` · Built for Smart India Hackathon · Privacy Policy · Terms

### Fixed / Floating Elements

| Element | Position | Background | Text | Border | Behavior |
|---|---|---|---|---|---|
| `● Monitoring Active` risk pill | Fixed bottom-left | `#213318` | dot `#C8EA3B` · text `#C5D7BD` | `1px #37502B` | Dot pulses lime every 2s |
| Contact / WhatsApp button | Fixed bottom-right | `#25D366` | `#FFFFFF` | none | Drop shadow · hover lift |
| Cookie consent banner | Fixed bottom-center | `#1A2614` | `#C5D7BD` · accept `#C8EA3B` | `1px #37502B` top | Decline / Accept |

---

## ◈ SECTION BACKGROUND SEQUENCE (at a glance)

| # | Section | Background |
|---|---|---|
| Navbar | Sticky header | Transparent → `#1A2614` on scroll |
| 01 | Hero | `#213318` (dark forest) |
| 02 | Stats Bar | `#1A2614` (deepest dark) |
| 03 | Beneficiary Marquee | `#FFFFFF` (white) |
| 04 | Credibility Cards | `#F8F9F6` (off-white) |
| 05 | Risk Carousel | `#FFFFFF` (white) |
| 06 | Problems Grid | `#F8F9F6` (off-white) |
| 07 | Solution Stepper | `#FFFFFF` (white) |
| 08 | Capabilities Carousel | `#1A2614` (dark forest) |
| 09 | AI / CV Deep Dive | `#FFFFFF` (white) |
| 10 | Early Warning | `#F8F9F6` (off-white) |
| 11 | Field Reporting | `#FFFFFF` (white) |
| 12 | Who Benefits | `#F8F9F6` (off-white) |
| 13 | Why SANKET | `#213318` (dark forest) |
| 14 | Tech Stack Marquee | `#F8F9F6` (off-white) |
| 15 | Contact / CTA | `#273C1E` (dark olive) |
| Footer | Footer | `#1E2D17` (deepest forest) |

*Alternating light/dark rhythm creates clear section separation without hard dividers.*

---

*Built for Smart India Hackathon · SANKET — Predict. Prepare. Protect.*
