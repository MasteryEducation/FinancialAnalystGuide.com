---
title: "Multi-Stage FCFF and FCFE Models"
description: "Explore multi-stage free cash flow valuation models for equity analysis, focusing on varying growth phases, discount rates, and terminal value estimation. This comprehensive guide covers essential steps, best practices, illustrative examples, and a quiz to test your understanding."
linkTitle: "9.1 Multi-Stage FCFF and FCFE Models"
date: 2025-03-21
type: docs
nav_weight: 9100
canonical: "https://FinancialAnalystGuide.com/cfa-level-3/volume-9-portfolio-management"
license: "© 2025 Tokenizer Inc. CC BY-NC-SA 4.0"
---

## Introduction

Sometimes, you look at a hot new tech startup and think, “Wow, these guys are growing at warp speed. How on earth do I put a value on that?” Well, that’s precisely where multi-stage Free Cash Flow (FCF) valuation comes in. When a firm goes through multiple phases—like a high-growth phase, maybe a transitional phase, and finally some more stable growth period—it can be tricky to pin down a single number for its future cash flows. One stage model just won’t accurately cut it. Instead, you break the firm’s life into separate “growth chapters” and project the cash flows step by step.

In this section, we’ll explore how to handle changing growth rates, capital structures, and discount rates when estimating the firm’s valuation using multi-stage FCFF and FCFE models. As always, keep your eyes open for potential pitfalls: it’s way too easy to get carried away by rosy assumptions. Let’s dive in.

## Overview of FCFF vs. FCFE

Before we jump into multi-stage modeling, let’s review the fundamentals:

• Free Cash Flow to the Firm (FCFF): This is the cash flow available to both equity and debt holders. You calculate FCFF before interest payments to creditors but after the necessary capital expenditures (CapEx) and working capital investments. If you prefer to discount FCFF, your discount rate is the Weighted Average Cost of Capital (WACC).

• Free Cash Flow to Equity (FCFE): This measures the cash flow that’s left just for the equity holders after meeting all debt obligations—primarily interest and principal repayments—and after covering CapEx and working capital. FCFE is typically discounted at the cost of equity.

The distinction is crucial. A small anecdote: I once tried valuing a heavily leveraged company by analyzing FCFE without fully adjusting for required debt repayments—and, well, that fiasco taught me how ignoring the debt schedule can produce a major mismatch in the valuation. So keep that difference in mind at all times.

## Setting Up Multi-Stage Valuation

### Identifying Growth Stages

Let’s talk about breaking the company’s future into distinct growth phases:

• Stage 1 (High Growth): Maybe the first three to five years—or up to ten if you’re dealing with biotech or ever-evolving industries—where the company might be scaling like crazy. The growth rates are typically higher than the broader market.

• Stage 2 (Transition): At some point, growth has to moderate. This stage sees growth taper off from that super high rate. Time frames vary, maybe another few years.

• Stage 3 (Stable Growth): Eventually, the firm can’t outgrow the entire economy forever (unless we’re talking about a truly disruptive behemoth). Here, the growth rate levels off at a stable, sustainable figure that typically parallels or slightly exceeds GDP growth.

You might have more than three stages—like a two-stage, three-stage, or even a multi-phase approach with numerous transitions—but the idea is the same: each block has its own unique growth assumptions reflecting the firm’s expected reality in that period.

### Projecting Cash Flows in Each Stage

For each discrete phase, you project:

• Sales or revenue growth (and net income if that’s your starting point).  
• Capital expenditures (CapEx), potentially higher in early stages to fuel expansion.  
• Depreciation and amortization.  
• Changes in working capital, which can be substantial in the high-growth phase.  
• Debt repayment schedules (particularly relevant for FCFE).  

Basically, you want to estimate either FCFF or FCFE for each of those years. That might mean building out a multi-year forecast: year-by-year for each stage. Once you get used to it, mapping out these flows becomes second nature.

## Cost of Capital: An Evolving Picture

### WACC for FCFF

If you decide to work with FCFF, you discount at WACC. But remember, if the firm’s capital structure changes over time, or if its risk profile shifts, that WACC might vary from stage to stage. A younger firm might use more debt financing initially (or less) and gradually adjust the structure. So be prepared for:

WACC changes = f(Capital structure changes, interest rate changes, equity risk premium adjustments, etc.)

It’s quite common to keep WACC constant in a multi-stage model if you think the capital mix is stable. But if management has a stated target that they’ll be ramping up or winding down leverage, factor those changes in carefully.

### Cost of Equity for FCFE

For FCFE, discount rates usually reference the required return on equity, often derived from the Capital Asset Pricing Model (CAPM):

KaTeX formula example for cost of equity (CAPM):
{{< katex >}}
r_e = R_f + \beta (E[R_m] - R_f)
{{< /katex >}}

If you think the firm’s beta changes (due to leverage or systematic risk changes) across stages, then you might have a different cost of equity for each stage. 

## Terminal Value: The End-Game

Eventually, you’ll reach a point where explicit forecasts are no longer practical. You then calculate a terminal value (TV) that captures all subsequent cash flows beyond your forecast horizon. Two common ways:

### Perpetuity Growth Method

When you expect stable growth forever (like at Stage 3):

{{< katex >}}
\text{Terminal Value at Year } n = \frac{ \text{FCFF}_{n+1} } { WACC - g }
{{< /katex >}}
or (for FCFE):
{{< katex >}}
\text{TV}_{n} = \frac{ \text{FCFE}_{n+1} } { r_e - g }
{{< /katex >}}

where g is the perpetual growth rate. Just be sure to keep it realistic: g should not be larger than the expected average growth of the economy.

### Exit Multiple

Another approach is to check what multiples are used in your industry. For instance, you can say, “At Year 5, the company might trade at 8× EBITDA,” or you might apply a Price/Earnings ratio if that’s standard. So:

TV in final year = EBITDA in final year × exit multiple

Again, ensure consistency: if you’re discounting FCFF at WACC, then your multiple should reflect a firm-level multiple (like EV/EBITDA). If you’re using an equity-based multiple (like P/E), that belongs in an FCFE context.

## Linking the Stages with a Diagram

Below is a high-level Mermaid diagram that shows a typical multi-stage setup for FCFF. Let’s keep it simple:

```mermaid
flowchart LR
    A["Initial Forecast <br/>High Growth Period"] --> B["Transition <br/>Slowing Growth"]
    B --> C["Stable Growth <br/>Calculate Terminal Value"]
    C --> D["Discount All <br/>Cash Flows to Present"]
```

1. Forecast FCFF (or FCFE) during the high-growth period.  
2. Move into the transition phase, with a declining growth rate.  
3. Eventually hit stable growth and calculate a terminal value.  
4. Discount every cash flow and the terminal value back to the present.

## Practical Example: Two-Stage FCFF Model

Let’s sketch a mini example to make this concrete:

1) You forecast 5 years of explicit growth at 12% per year.  
2) After Year 5, you anticipate the company will settle into a stable growth rate of 4%.  
3) WACC is 10% in each stage, and you’re focusing on FCFF.

● Step 1: Forecast FCFF for Years 1 through 5. Suppose you have:  
• FCFF(1) = \$100 million (Year-1 projected)  
• FCFF(2) = \$112 million  
• FCFF(3) = \$125.44 million  
• FCFF(4) = \$140.49 million  
• FCFF(5) = \$157.35 million  

● Step 2: Calculate the Terminal Value at the end of Year 5 using the perpetuity growth model:  
{{< katex >}}
\text{TV}_{5} = \frac{\text{FCFF}(6)}{\text{WACC} - g}
{{< /katex >}}
We need FCFF(6). If we assume a 4% growth from Year 5 to Year 6:  
{{< katex >}}
\text{FCFF}(6) = 157.35 \times 1.04 = 163.65 \text{ (approx.)}
{{< /katex >}}
So,
{{< katex >}}
\text{TV}_{5} = \frac{163.65}{0.10 - 0.04} = \frac{163.65}{0.06} = 2,727.5 \text{ million}
{{< /katex >}}
● Step 3: Present Value of Each Cash Flow  
Discount each FCFF back to the present at 10%:

{{< katex >}}
\text{PV of FCFF}(1) = \frac{100}{(1+0.10)^1} \approx 90.91
{{< /katex >}}  
{{< katex >}}
\text{PV of FCFF}(2) = \frac{112}{(1+0.10)^2} \approx 92.15
{{< /katex >}}  
{{< katex >}}
\text{PV of FCFF}(3) = \frac{125.44}{(1+0.10)^3} \approx 94.02
{{< /katex >}}  
{{< katex >}}
\text{PV of FCFF}(4) = \frac{140.49}{(1+0.10)^4} \approx 96.03
{{< /katex >}}  
{{< katex >}}
\text{PV of FCFF}(5) = \frac{157.35}{(1+0.10)^5} \approx 97.66
{{< /katex >}}
And of course, discount the terminal value:

{{< katex >}}
\text{PV of TV}_{5} = \frac{2,727.5}{(1+0.10)^5} \approx 1,694.64
{{< /katex >}}
● Step 4: Sum Them All Up  
{{< katex >}}
\text{Value of the Firm} = 90.91 + 92.15 + 94.02 + 96.03 + 97.66 + 1,694.64 \approx 2,165.41
{{< /katex >}}
So in this simplified example, the total present value is about \$2.165 billion. In practice, you’d refine each piece: precisely modeling CapEx, working capital, or adjusting the WACC if needed. But this is the gist.

## Best Practices for Multi-Stage Valuations

• Keep Growth Rates Realistic: Overestimating near-term growth is a surefire way to get burned.  
• Mind the Capital Structure Shifts: If your forecast includes the firm raising new debt or paying it down, reflect that in your discount rate or your FCFE.  
• Align Numerators and Denominators: If you’re discounting FCFF at WACC, the perpetual growth rate or the exit multiple must conform to corporate-level measures (like EBIT or EBITDA). For FCFE, it’s an equity measure.  
• Reference Market Data: Use comparables, industry research, and benchmarks to cross-check your numbers. If you find your model suggests the business should suddenly achieve net profit margins out of sync with industry history, question your assumptions.  
• Double-Check the Year When You Apply the Terminal Value: A common rookie mistake is mixing up the discount factor or aligning the final stage incorrectly.

## Common Pitfalls

• Changing Discount Rates Without Logical Justification: This can happen if you assume a big capital structure shift but your model doesn’t tie that to actual financing details.  
• Inconsistent Growth and Reinvestment Assumptions: If you’re projecting very high growth, ensure that your CapEx or R&D outlays scale up accordingly.  
• Ignoring Management’s Actionable Plans: Management might promise “a new plant in Year 3,” but if you can’t see evidence of capital budgeting for it, keep a healthy dose of skepticism.  

## Real-World Perspectives

When I valued a fast-growing e-commerce company, their finance team insisted on a 10% growth rate for a full 10 years. That’s… ambitious. After doing some macro-level sanity checks, we realized we needed a multi-stage approach: 10% was plausible for the first 3 to 4 years, but then we let it taper to 6%, and eventually 3%. That more grounded approach led to a final valuation that clients found more credible and appealing.

## Brief Note on Modeling Tools

While you can do multi-stage valuations in Excel quite effectively, sometimes a small Python script can help you quickly iterate scenario after scenario. For instance:

```python
import numpy as np

cash_flows = [100, 112, 125.44, 140.49, 157.35] 
terminal_value = 2727.5
discount_rate = 0.10

pv = 0
for i, cf in enumerate(cash_flows, 1):
    pv += cf / ((1 + discount_rate) ** i)

pv_tv = terminal_value / ((1 + discount_rate) ** len(cash_flows))

total_value = pv + pv_tv
print("Total Firm Value: ", round(total_value, 2))
```

This snippet is simplistic, but it can handle a variety of “what if” quick checks. The key is not which software you use, but the consistency and realism of your assumptions.

## Final Thoughts for the Exam

If you’re sitting for the CFA Level II exam, expect item sets that describe a company’s multiple growth phases. You’ll see vignettes highlighting different discount rates or changes in capital structure. Key steps:

• Extract the relevant growth rates, durations, discount rates, and cash flow details from the vignette.  
• Carefully identify FCFF vs. FCFE.  
• Watch for the final question on terminal value—especially whether they want the value in the current year or at the end of the forecast horizon.  
• Watch time: multi-stage valuations can be calculation-heavy. If you see a large exhibit table, quickly highlight each year’s FCFF/FCFE row, the given discount rate, and the year the terminal value is applied.  

## Additional References

• Pinto, J., Henry, E., Robinson, T., & Stowe, J. (2020). Equity Asset Valuation. CFA Institute Investment Series.  
• Damodaran, A. (2012). Investment Valuation: Tools and Techniques for Determining the Value of Any Asset (2nd ed.). John Wiley & Sons.  
• Official CFA Program Curriculum, Level II, “Equity Valuation: Concepts and Basic Tools.”  

Remember, multi-stage models are incredibly powerful, but they’re only as good as the assumptions behind them. Keep your wits about you, stay grounded in evidence, and best of luck in your exam prep.

---

## Test Your Knowledge: Multi-Stage FCFF and FCFE Valuation

{{< quizdown >}}

### Which valuation approach uses the Weighted Average Cost of Capital (WACC) to discount future cash flows?

- [x] FCFF-based valuation
- [ ] FCFE-based valuation
- [ ] Dividend discount model
- [ ] Residual income model

> **Explanation:** FCFF (Free Cash Flow to the Firm) is discounted at the WACC because FCFF represents cash flows available to both debt and equity holders.

### In a multi-stage FCFE model, which discount rate is most appropriate?

- [ ] WACC
- [x] Required return on equity
- [ ] Risk-free rate
- [ ] The corporate bond yield

> **Explanation:** FCFE cash flows belong to equity holders only, so they are discounted at the required return on equity.

### What is the main purpose of setting distinct growth stages in a multi-stage valuation model?

- [x] To capture varying growth rates over time
- [ ] To simplify the calculation of annual free cash flows
- [ ] To avoid estimating a terminal value
- [ ] To eliminate the need for discounting

> **Explanation:** Multi-stage models reflect the reality that companies commonly experience different phases of growth.

### A firm’s terminal value using a perpetuity growth approach is calculated using:

- [x] (FCFF or FCFE in the first year beyond explicit forecast)/(Discount rate – perpetual growth rate)
- [ ] EBITDA × exit multiple
- [ ] Beta × (E[Rm] – Rf)
- [ ] Book value × (1 + growth rate)

> **Explanation:** The perpetuity growth method calculates terminal value by dividing next-period cash flow by the difference between discount rate and perpetual growth rate.

### Which of the following best describes a situation in which the WACC might change in different valuation stages?

- [x] The company plans to retire a large portion of its debt in five years, altering its capital structure.
- [ ] The company operates in multiple countries with different tax rates.
- [x] The firm’s business lines remain unchanged across the entire forecast period.
- [ ] The firm’s IRR is higher than its cost of equity.

> **Explanation:** Retiring or adding debt can shift the company’s leverage ratio, which may cause changes to WACC.

### Which statement is true about a terminal value estimated using an EV/EBIT multiple?

- [x] It's more appropriate to use in an FCFF model since it’s enterprise-value based.
- [ ] It's only valid under stable growth.
- [ ] You must apply it to the company’s equity dividends.
- [ ] You should discount it using a risk-free rate.

> **Explanation:** EV/EBIT is relevant to total firm valuation (like FCFF), so it aligns with discounting at WACC.

### If a firm has unusually high CapEx requirements in its initial years, how should this be reflected in a multi-stage model?

- [x] Forecast lower free cash flows in early years, gradually adjusting as CapEx normalizes.
- [ ] Increase the perpetuity growth rate.
- [x] Decrease the discount rate in the early years.
- [ ] Use the same FCFF in each year.

> **Explanation:** Higher CapEx reduces free cash flow in the early stage. The discount rate or growth rate alone does not necessarily change simply due to higher CapEx.

### In practice, what is a key benefit of multi-stage models compared to single-stage models?

- [x] They can reflect changes in growth, profitability, or risk over time.
- [ ] They require fewer inputs.
- [ ] They never need terminal values.
- [ ] They generate the same valuations as single-stage models but are simpler to implement.

> **Explanation:** Multi-stage models better capture real-world dynamics where growth and risk vary across a firm’s lifecycle.

### If a firm’s management states a strategic shift that will reduce leverage significantly in three years, what effect might this have on the multi-stage valuation?

- [x] The cost of equity and the WACC may decrease over time.
- [ ] The cost of equity and the WACC would remain the same.
- [ ] The FCFE model becomes irrelevant.
- [ ] The terminal value is unnecessary.

> **Explanation:** A decrease in leverage typically lowers the overall riskiness of equity (and possibly reduces WACC if debt is a smaller component of the capital structure).

### For a firm in its final stable growth stage, which statement about growth rates is most accurate?

- [x] It should generally not exceed the long-term economic growth rate.
- [ ] It should be set equal to the firm’s past 10-year average growth rate.
- [ ] It should equal zero to avoid double-counting.
- [ ] It must be lower than the risk-free rate.

> **Explanation:** In stable growth, the firm typically grows at or slightly above the rate of the overall economy, recognizing that outlandish perpetual growth assumptions are unrealistic.

{{< /quizdown >}}
