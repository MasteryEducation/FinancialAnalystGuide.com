---
title: "Private Company and Residual Income Combo"
description: "A comprehensive guide to combining private company valuation techniques with a residual income framework, highlighting normalization, cost of capital, and key adjustments like minority discounts and control premiums."
linkTitle: "34.2 Private Company and Residual Income Combo"
date: 2025-03-21
type: docs
nav_weight: 34200
canonical: "https://FinancialAnalystGuide.com/cfa-level-3/volume-9-portfolio-management"
license: "© 2025 Tokenizer Inc. CC BY-NC-SA 4.0"
---

## Introduction

You might remember the first time you looked at private company financial statements—if you haven’t encountered that moment yet, get ready, because it can feel a bit like opening a mysterious treasure chest that’s missing half the clues. Public companies are subject to ongoing disclosure and regulation, which means loads of data. Private companies? Yeah, not so much. You often have to dig around for hidden notes, cross-verify owner compensation, and maybe even adjust for that monthly “management fee” that’s suspiciously close to the CEO’s personal expenses.  

In this section, we’ll explore how to weave together private company valuation concepts with residual income techniques (often referred to under the umbrella of Economic Value Added, or EVA). We’ll do this step-by-step, showing how you can take those limited data points, normalize them into a credible forecast, and then estimate the level of economic profit (or residual income) the firm generates.  

We’ll also talk about control issues—like how a buyer might pay a premium for the ability to call the shots in a family-owned business—and the discount a minority investor might demand for not having much say.  By the end of this discussion, you’ll hopefully feel more at ease integrating residual income approaches with the quirks of private company valuation.  

## Interplay of Private Company Valuation and Residual Income

Most of us first learned about equity valuation in the context of publicly traded stocks: you have reams of data, third-party analyst reports, and real-time price quotes. With private companies, not only is market data crimped or nonexistent, but we typically can’t rely on widely followed metrics such as a firm’s beta from a Bloomberg terminal.  

That’s where residual income models come into play. Residual income is basically net profit above and beyond the opportunity cost of capital. In formula form, a simplified expression might look like:

{{< katex >}}
\text{Residual Income} = \text{Net Income} - r_{e} \times \text{Beginning Book Value of Equity}
{{< /katex >}}

But with private companies, you often use Net Operating Profit After Taxes (NOPAT) minus a capital charge to find a more operational measure of economic profit—this alternative measure is commonly known as Economic Value Added (EVA), expressed as:

{{< katex >}}
\text{EVA} = \text{NOPAT} - (\text{WACC} \times \text{Invested Capital})
{{< /katex >}}

Why can EVA or residual income help with private firms? Actually, these models emphasize fundamental drivers—operating profitability, capital usage, and cost of capital—and don’t rely so heavily on public-comp data or direct market multiples (which might not be representative).  

## Normalizing Private Company Earnings

If there’s one big theme in private company valuation, it’s that the reported financial statements often need heavy-duty adjustments. I recall once helping a friend’s family business figure out its value to bring on a new partner. Turns out a ton of “personal” expenses were lumped into the company’s statements—car leases, home office charges, a few family cell phone plans, and so on. That’s normal in many small, owner-operated businesses—but for valuation, you need to strip those out and re-center on regular operating expenses.  

1. Owner Compensation Adjustments:  
   - Many owners pay themselves either way above or way below a market salary. You need to replace that cost figure with something that reflects a true market wage for the role.  

2. One-Off or Non-Recurring Items:  
   - For instance, a large legal settlement or a multi-year R&D push might not represent typical future spending.  

3. Discretionary Expenditures:  
   - If the firm invests sporadically in marketing or capital improvements, you’ll want to normalize that activity over a cycle rather than picking an outlier year.  

By cleaning up the income statement, your measure of NOPAT becomes more meaningful. NOPAT is often used in EVA analysis.  

Below is a quick illustration of how you might think about normalizing private company earnings in a simplified diagram:

```mermaid
flowchart LR
A["Private Company <br/>Financial Statements"] -- "Adjust for <br/>Owner Compensation" --> B["Normalized NOPAT"]
B -- "Subtract <br/>WACC Charge" --> C["Residual Income (Economic Profit)"]
```

In practice, you’d also adjust for accounting policies (IFRS vs. U.S. GAAP can differ on revenue recognition or capitalization of costs), off-balance-sheet items (like operating leases or special purpose entities), and intangible assets that might be missing from the books.  

## Estimating the Cost of Capital for Private Firms

Now, about that Weighted Average Cost of Capital (WACC). One of the biggest challenges in private firm valuation is the cost of equity. For public companies, we have CAPM (Capital Asset Pricing Model) with a published beta, the risk-free rate, and an equity risk premium. Private companies rarely have a readily observable beta.  

Typical approaches to handle this:

• Build-Up Method: Start with a risk-free rate, add an equity risk premium, add a small-company premium (because smaller firms traditionally exhibit higher risk and higher returns), and then add a specific-company risk premium for idiosyncratic issues (e.g., heavy client concentration in one or two big customers).  

• Expanded CAPM: Another method is to begin with a CAPM-like approach and then tack on additional factors (like size premium and company-specific risk).  

• Industry Beta Proxy: Use the average beta of comparable public-listed companies in the same industry (adjusted for differences in capital structure), and then maybe add or subtract some basis points for the private firm’s unique risk.  

Regardless of the method, the cost of equity for a private company might be significantly higher than that of a well-established public firm. This difference stems from illiquidity, potentially smaller scale, a less diversified capital structure, and so on.  

## Setting Up the Residual Income (EVA) Model

Once you have:
1. Normalized NOPAT, and  
2. A credible WACC estimate,  

you can compute Economic Value Added in each forecast period:

{{< katex >}}
\text{EVA}_t = \text{NOPAT}_t - (\text{WACC} \times \text{Invested Capital}_{t-1})
{{< /katex >}}

Alternatively, if you choose to stick to an equity-centric approach, you’d do:

{{< katex >}}
\text{Residual Income}_t = \text{Net Income}_t - (r_e \times \text{Equity}_{t-1})
{{< /katex >}}

Both paths aim to measure the economic profit above the cost of capital. The difference is that EVA is typically at a firm level (including debt and equity), while the residual income approach is purely about equity holders.  

## Multi-Period Residual Income: Example Workflow

Imagine you have a private manufacturing business forecasting five years of performance. You can follow these steps:

1. Forecast Sales, Costs, and Depreciation:  
   - Incorporate your best assumptions about revenue growth, raw material costs, overhead, and so forth.  
2. Normalize for Owner-Related Expenses:  
   - Maybe the current owner is paying himself an uncommonly low salary. Increase that figure to a market-based salary.  
3. Compute NOPAT:  
   - Subtract operating expenses (adjusted for the new salary), depreciation, and taxes from revenue.  
4. Determine Invested Capital or Equity Book Value:  
   - For EVA or for residual income, you need the beginning-of-period capital base.  
5. Estimate WACC or Cost of Equity:  
   - Possibly use the build-up method or industry proxy.  
6. Calculate Economic Profit Each Year:  
   - EVA or residual income for each year.  
7. Calculate Terminal Value (Continuing Residual Income):  
   - If you anticipate a growth rate g in perpetuity, you might do:

   {{< katex >}}
   \text{Terminal Value} = \frac{\text{RI}_{Terminal}}{(r_e - g)}
   \quad\text{or}\quad
   \frac{\text{EVA}_{Terminal}}{\text{WACC}-g}
   {{< /katex >}}

8. Sum the Present Value of All Economic Profit Streams:  
   - Discount each year’s EVA or RI and the terminal value at the appropriate discount rate.  

It might look like this in a simple table structure for an equity-based residual income approach:

| Year | Net Income | Equity (BOP) | Cost of Equity | Equity Charge | Residual Income | PV Factor (rₑ) | PV of RI |
|------|-----------:|-------------:|---------------:|--------------:|----------------:|---------------:|---------:|
| 1    |  500,000   |   2,000,000  |      15%       |   300,000     |    200,000      |     0.870      | 174,000  |
| 2    |  550,000   |   2,200,000  |      15%       |   330,000     |    220,000      |     0.756      | 166,320  |
| 3    |  600,000   |   2,400,000  |      15%       |   360,000     |    240,000      |     0.658      | 157,920  |
| 4    |  660,000   |   2,600,000  |      15%       |   390,000     |    270,000      |     0.572      | 154,440  |
| 5    |  720,000   |   2,700,000  |      15%       |   405,000     |    315,000      |     0.497      | 156,555  |

• Then we’d calculate a continuing residual income for Year 6 onward, discount that back to present, and sum everything.  

## Adjusting for Control Premiums and Minority Discounts

With public companies, you buy shares at the market price. You rarely build in a “control premium” unless you’re aiming for an acquisition. But with private firms, it’s normal for new equity investors to pay more or less depending on the negotiated ownership share:

• Control Premium:  
  - If you’re buying some or all of the controlling stake, you might pay extra for the ability to direct corporate strategy, manage capital allocation, or replace underperforming management.  

• Minority Discount:  
  - If you’re buying a small, non-controlling slice, you might demand a discount for the inability to influence the firm’s decisions.  

So how do these tie in with residual income valuation? Generally, you’d run your residual income or EVA calculations to come up with a fundamental “as-if controlling” value, then layer on (or subtract) the premium (or discount) in the final negotiation. Another approach is to reflect the discount/premium in your discount rate or ongoing cash flows—though that can get messy and is more subjective.  

## Common Pitfalls

• Overlooking Normalization:  
  - Private companies can have unadjusted financials that do not reflect true recurring costs or revenues. Missing these adjustments can severely distort valuations.  

• Misjudging the Cost of Equity:  
  - Relying on a standard CAPM with some random beta that’s not relevant to a private firm. This can understate or overstate risk significantly.  

• Single-Period Over-Simplifications:  
  - Some might try to jam everything into a single “capitalized earnings” figure. This approach might ignore the firm’s growth potential or the strategic investments required.  

• Failing to Separate Owner/Manager Roles:  
  - In some businesses, the CEO is also the lead salesperson, product developer, and brand spokesperson. Make sure the forecast includes realistic replacement costs if that key person leaves.  

• Double Counting:  
  - When computing EVA-based valuations, watch out for adding the capitalized intangible assets in the calculation of invested capital and then also adding them as a separate intangible line item.  

## Best Practices for Combining Private Company Valuation and Residual Income

• Thorough Data Collection:  
  - If possible, interview management or the owner to confirm the real nature of expenses.  

• Cross-Check with Market Methods:  
  - Even if you’re leaning heavily on residual income analysis, it’s nice to glance at industry multiples or intangible “rules of thumb” to see if your results are wildly off.  

• Emphasize Scenario Analysis:  
  - We all know private businesses can be extremely sensitive to the economy, industry trends, or even local factors (like the closure of a nearby supplier). Try multiple scenarios for your forecast (e.g., base, optimistic, and conservative).  

• Recognize the Illiquidity:  
  - Private company stakes can tie up your money for years without an easy exit. That reality often justifies a higher discount rate or an explicit illiquidity discount.  

• Evaluate the Potential for Off-Balance-Sheet Liabilities:  
  - Many private firms use operating leases or even guarantee personal loans. Bring all that into the valuation picture to avoid surprises.  

## References and Further Reading

- Damodaran, A. (2014). The Little Book of Valuation. John Wiley & Sons.  
- CFA Institute Program Curriculum, Corporate Finance and Equity.  
- Pratt, S.P. (2009). Valuing a Business: The Analysis and Appraisal of Closely Held Companies. McGraw-Hill.  
- Koller, T., Goedhart, M., & Wessels, D. (2020). Valuation: Measuring and Managing the Value of Companies. John Wiley & Sons.  

## Exam-Day Tips

• Carefully read vignettes for data on owner compensation and discretionary spending—exam items often slip these details in as small footnotes.  
• For multi-period forecasts, remember to compute each year’s residual income (or EVA) and discount at the appropriate rate. Don’t forget the continuing (terminal) value.  
• Watch out for the difference in formulas between equity-based residual income and firm-level EVA.  
• If you see a question about why the discount rate is higher for a private firm, you can bet it has to do with lack of liquidity, higher idiosyncratic risk, and maybe a small-firm premium.  
• On related items about control premiums or minority discounts, ensure you understand whether they should be layered after you get the baseline value or integrated into discount rates.  

## Test Your Knowledge: Private Company and Residual Income Concepts

{{< quizdown >}}

### Question 1
A private manufacturing company’s normalized net income is $800,000. Its beginning book value of equity is $4 million, and its cost of equity is 15%. Based on the simple residual income method, what is the residual income for the current year?

- [ ] 0
- [ ] $100,000
- [x] $200,000
- [ ] $600,000

> **Explanation:** Residual income = Net Income – (Cost of Equity × Beginning Book Value).  
> = 800k – (0.15 × 4,000k) = 800k – 600k = $200,000.


### Question 2
Which of the following is most likely a valid reason to adjust a private company’s reported compensation expense before calculating residual income?

- [x] The owner-operator’s salary is far below a comparable market wage.
- [ ] The firm’s depreciation policy differs from industry norms.
- [ ] The firm recently added a new product line.
- [ ] The company uses FIFO inventory accounting.

> **Explanation:** In private firms, one of the biggest normalizations is adjusting owner compensation if it deviates significantly from a market-based salary. While the other factors may also require adjustments, under-compensated or over-compensated owners are the most typical reason for normalizing expenses.


### Question 3
When using a build-up method to estimate the cost of equity for a private firm, an analyst would begin with a risk-free rate and then:

- [x] Add an equity risk premium, small-company premium, and specific-company premium.
- [ ] Add a single “size premium” to incorporate all additional risk factors.
- [ ] Subtract an illiquidity premium.
- [ ] Use a beta from the most closely related public company.

> **Explanation:** The build-up method literally adds layers of additional risk factors: the general equity market risk premium, small-company (size) premium, and a company-specific premium that accounts for unique aspects of the private firm.


### Question 4
Which of the following is an advantage of using a residual income (RI) approach for private company valuation?

- [x] It focuses on economic profit beyond the cost of capital, even when market multiples are unavailable.
- [ ] It eliminates the need for estimating a discount rate since it only uses accounting data.
- [ ] It requires fewer adjustments for normalizing earnings compared to other methods.
- [ ] It provides a final valuation without any need for a terminal value calculation.

> **Explanation:** Residual income (or EVA) is valuable precisely because it measures a company’s value creation beyond the cost of capital. It remains relevant even when publicly traded comparables and market multiples are not available. The rest of the statements are incorrect or misleading.


### Question 5
Which statement best describes how a control premium is incorporated when using a residual income valuation of a private target?

- [ ] You lower the WACC to reflect control benefits.
- [x] You calculate the RI-based value of the firm as if it is controlled, then add a premium based on negotiations.
- [ ] You add “phantom revenues” to reflect anticipated synergies from control.
- [ ] You do not incorporate control premiums in a private firm valuation.

> **Explanation:** Generally, the baseline valuation is performed as if the investor has control, then an additional premium may be added if negotiations justify it (or subtracted if a minority stake is being valued).


### Question 6
A private hardware store’s financial statements show higher-than-average “management fees” and personal phone bills. How should the analyst handle these in a residual income valuation?

- [x] Reclassify them if they are non-essential expenses, thereby increasing normalized net income.
- [ ] Subtract them from residual income directly to avoid over-valuing the company.
- [ ] Treat them as intangible assets.
- [ ] Clearly these don’t matter, as they do not affect the cost of capital.

> **Explanation:** The analyst would “add back” or remove such personal or extraneous expenses, which increases normalized net income (and typically raises the resulting valuation), since these are not legitimate operating costs.


### Question 7
If a company’s total NOPAT is \$1.2 million and its invested capital is \$8 million, while WACC is 12%, what is its yearly EVA?

- [ ] \$0
- [ ] \$144,000
- [ ] \$960,000
- [x] \$240,000

> **Explanation:** EVA = NOPAT – (WACC × Invested Capital) = 1,200,000 – (0.12 × 8,000,000) = 1,200,000 – 960,000 = \$240,000.


### Question 8
A minority discount is most appropriately applied when:

- [ ] The private company’s owners are actively looking to sell a controlling interest.
- [ ] Publicly noted P/E ratios are significantly higher than private comparables.
- [x] An investor acquires a stake with no meaningful influence over management decisions.
- [ ] The private business is likely to run out of cash.

> **Explanation:** A minority discount recognizes that a non-controlling or minority owner cannot typically influence decisions such as dividend policy, strategic directions, or executive hiring. In practice, this discount is applied to reflect the decreased value (to that investor) of a stake without control rights.


### Question 9
A typical pitfall when using residual income for private companies is:

- [ ] Incorporating cost of capital in the calculation.
- [ ] Calculating NOPAT and net income separately.
- [x] Underestimating the cost of equity due to non-public data.
- [ ] Overestimating future book value growth.

> **Explanation:** One of the biggest pitfalls is incorrectly estimating the cost of equity—especially if you simply grab a random beta or assume a risk premium that’s too low. Private firms often have higher risk than an average public company.


### Question 10
True or False: When using residual income for a private firm, the analyst never needs to consider a terminal value.

- [ ] True
- [x] False

> **Explanation:** In most multi-period valuations, you eventually need a continuing or terminal value to capture all future periods beyond the forecast horizon, especially if the business is expected to be a going concern for many years.


{{< /quizdown >}}
