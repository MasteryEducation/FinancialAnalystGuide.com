---
title: "Money‑Weighted vs. Time‑Weighted Returns"
description: "Compare and contrast the money-weighted and time-weighted rates of return, understand their relevance in evaluating portfolios, and identify when each approach is most appropriate."
linkTitle: "1.4 Money‑Weighted vs. Time‑Weighted Returns"
date: 2025-03-21
type: docs
nav_weight: 1400
canonical: "https://FinancialAnalystGuide.com/cfa-level-3/volume-1-asset-allocation"
license: "© 2025 Tokenizer Inc. CC BY-NC-SA 4.0"
---

## Introduction

I remember once chatting with a friend who was absolutely convinced his portfolio was on fire—he had been adding money whenever he felt extra cash was sitting around and withdrawing whenever he found some hot new gadget to buy. Then he proudly told me the portfolio’s return that month, and I had to pause: “Wait… are you calculating the return based on your inflows and outflows, or just ignoring them altogether?” He looked at me like I’d just asked him to solve a riddle. And, well, that’s exactly how many investors feel when first confronted with the concepts of money-weighted vs. time-weighted returns.

In this section, we’re going to dissect these two methods of measuring performance, highlight their sneaky differences, and see why it matters in the real world. You might be surprised how choosing one or the other can lead to significantly different results, especially if you like to frequently tinker with your investments. So let’s explore why the industry standard for performance evaluation is one measure (the time-weighted rate of return, or TWRR) while personal investors often care more about another measure (the money-weighted rate of return, or MWRR).

## Money-Weighted Rate of Return (MWRR)

### Core Concept of MWRR

The Money-Weighted Rate of Return (MWRR) is also known as the Internal Rate of Return (IRR). It’s the discount rate that sets the net present value (NPV) of an investment’s cash flows to zero. Put another way, MWRR incorporates the exact timing and size of all cash inflows (contributions) and outflows (withdrawals) in a portfolio. This is especially useful if you, as an investor, exercise active control over how much you invest and when you do so.

Mathematically, we can express the IRR condition as:

{{< katex >}}
\sum_{t=0}^{n} \text{CF}_t \,(1 + \text{MWRR})^{-t} = 0
{{< /katex >}}

where \\(\text{CF}_t\\) represents the cash flow at time \\(t\\). Negative cash flows (i.e., investments into the portfolio) enter with a minus sign if you treat them as outflows, and positive ones represent portfolio withdraws or the final liquidation.

### Why MWRR Matters

• Reflects Actual Investor Experience. If you’re personally deciding when to add or remove money, your personal portfolio return is effectively captured by this measure. It shows the growth rate of the money you actually invest.  
• Sensitive to Timing. MWRR can deviate sharply from other return measures if you happen to drop a large contribution into the account right before a market decline (or if you redeem a large chunk before a strong upswing).  

Here’s where the confusion can arise though: large deposits and withdrawals heavily influence the MWRR. If you contribute a huge amount right at a market peak, your MWRR might end up punishing what otherwise might have been a decent sequence of portfolio returns. Every contribution or withdrawal re-weights the portfolio’s performance based on the amount of money actually invested in different time periods.

### Practical Example of MWRR

Suppose you invest \$10,000 at the start of Year 1. At the end of Year 1, the portfolio is worth \$11,000. You then contribute an additional \$20,000 at the start of Year 2, bringing the total invested capital to \$31,000. At the end of Year 2, the overall balance is \$35,000, and you decide to withdraw everything. Your cash flows look like this:

• At \\(t=0\\): \\(-\$10,000\\)  
• At \\(t=1\\): \\(-\$20,000\\) (since you contribute more at the start of Year 2)  
• At \\(t=2\\): \\(+\$35,000\\)  

To find MWRR, we solve:

{{< katex >}}
-10{,}000(1 + r)^{0} -20{,}000(1 + r)^{-1} +35{,}000(1 + r)^{-2} = 0
{{< /katex >}}

Yes, that looks messy, but it essentially says: how do we discount these cash flows so that they sum to zero? Once you find that \\(r\\), that’s the MWRR.

Anyway, it can be a bit of an algebraic puzzle. In practice, you often rely on spreadsheet formulas (e.g., IRR in Excel) or a financial calculator to get the solution. The point is that the magnitude and timing of each contribution or withdrawal has a big effect on the final rate.

## Time-Weighted Rate of Return (TWRR)

### Why TWRR Was Invented

Imagine you’re a portfolio manager. You get assigned certain assets to manage, but your client, for personal reasons, might add or remove cash from the portfolio at random intervals. That’s obviously out of your control. The question is: how well are you performing as a manager, ignoring those unpredictable money flows? That’s what Time-Weighted Rate of Return aims to capture.

### Breaking It Down by Subperiods

TWRR focuses on the growth of a single unit of currency invested in the portfolio. It breaks the investment horizon into subperiods—often each day, month, or quarter—whenever there’s a cash flow. Within each subperiod, you calculate that subperiod return ignoring new contributions or withdrawals. Then you link these subperiod returns geometrically, effectively “chaining” them together.

Mathematically, if you have subperiod returns \\(R_1, R_2, \dots, R_n\\), then:

{{< katex >}}
\text{TWRR} = \left(\prod_{k=1}^{n} (1 + R_k)\right)^{1/n} - 1
{{< /katex >}}

This approach ensures each subperiod’s performance is equally weighted, regardless of how much money was in the account at the time.

### Visualizing TWRR Through a Diagram

Below is a simplified Mermaid diagram illustrating the concept of time-weighted returns across two subperiods:

```mermaid
flowchart LR
    A["Start of Investment"] --> B["Calculate Return<br/>over Subperiod 1"]
    B --> C["Calculate Return<br/>over Subperiod 2"]
    C --> D["Multiply (1 + R1)*(1 + R2)<br/> and take geometric mean"]
    D --> E["Time-Weighted Rate of Return"]
```

Essentially, TWRR attempts to neutralize the effect of external cash flows on the measured performance. If your client invests an extra \$1 million in the middle of the year, TWRR’s objective is to isolate your investment prowess from the effect of that big deposit.

### GIPS and Industry Standards

The Global Investment Performance Standards (GIPS) from the CFA Institute strongly recommend using TWRR in published performance results. The logic is straightforward: TWRR is a more accurate reflection of a manager’s skill over time, rather than how perfect the client’s timing of contributions or withdrawals may have been.  
 
In many institutional settings—pension funds, endowments, mutual funds—TWRR is considered the gold standard for performance reporting. It ensures all managers’ returns can be compared on an apples-to-apples basis, even if every manager’s client is erratically moving money in and out.

## Contrasting MWRR and TWRR

### Calculation Approach

• MWRR (IRR):  
  – Every contribution and withdrawal is treated as part of the cash flow schedule.  
  – You solve for the discount rate (r) that makes the NPV of all flows zero.  
  – Large amounts of money invested at certain times will heavily sway the result.

• TWRR (Geometric Linking Over Subperiods):  
  – Divide the total period into subperiods around each large cash flow.  
  – Compute the subperiod return ignoring external flows, then link geometrically.  
  – Each subperiod is “equally weighted,” so big deposits or withdrawals have minimal direct effect on the TWRR— they only add or remove assets but don’t distort the subperiod return magnitude itself.

### Focus of Each Measure

• MWRR = “My Actual Return”:  
  – If you personally directed each investment or withdrawal, MWRR tells you: “Of the money I actually put into this portfolio, how fast did it grow?”  
  – Great for personal performance vs. market timing decisions.

• TWRR = “Investment Manager’s Return”:  
  – Strips away the effect of investor deposits/withdrawals.  
  – Great for evaluating how well the manager did with the assets under management, no matter what the client was doing externally.

### Potential Distortions

MWRR can be misleading if you’re trying to measure a manager’s skill but, in reality, the investor is depositing or withdrawing large sums at inopportune times. Meanwhile, TWRR can be misleading if you want to see how well your actual money grew (you might see a high TWRR, but if you added money at a market top, your personal returns might be far lower).

## Real-World Application: When to Use Which

### MWRR: The Personal Investor Lens

If you’re evaluating your own return—like my friend from earlier—where you alone decide how much to contribute and when to cash out, MWRR is typically the best reflection of your experience. It effectively consolidates all those decisions into a single number. If your timing was excellent (adding money before the market rose), your MWRR will be higher.

### TWRR: Manager Skill and Comparisons

If you manage money for others or are analyzing different mutual funds or hedge funds, TWRR is usually the more relevant figure. Portfolio managers can’t control how much each client invests or withdraws. TWRR puts all managers on a level playing field by ignoring external flows.

### Industry Example

• Mutual Funds. The returns advertised by mutual funds and exchange-traded funds (ETFs) in their official reports are typically time-weighted; they reflect how the fund’s assets performed ignoring investor in/out.  
• “Investor Returns” vs. “Fund Returns.” You might see published statistics that say the average mutual fund delivered 8% TWRR in a given period, yet the actual investors in that fund realized only 6% on average. That discrepancy often arises because some investors buy at peaks (when the fund is more expensive) and sell at troughs (when the fund is cheaper). The TWRR tells you how the fund did overall, while MWRR would tell you the experience of the individual’s money flows.

## Step-by-Step Illustrative Example

Let’s walk through a short example that compares MWRR and TWRR side by side, focusing on how big flows can affect each:

1. At the beginning of Year 1, you invest \$100,000. The portfolio yields a return of +10% over that year, so at the end of Year 1, the value is \$110,000.  
2. At the very start of Year 2, you add another \$400,000, making the total \$510,000. Year 2 sees a 5% loss, so by year-end, the portfolio stands at \$484,500.

### MWRR Calculation (Simplified)

Cash flows:  
• \$100,000 at time 0, negative sign if we treat it as an outflow.  
• \$400,000 at time 1 (start of Year 2).  
• \$484,500 at time 2 (we treat it as a positive inflow upon liquidation).

We want \\(\text{MWRR}\\) such that:

{{< katex >}}
-100{,}000 - 400{,}000 (1 + \text{MWRR})^{-1} + 484{,}500 (1 + \text{MWRR})^{-2} = 0
{{< /katex >}}

You can guess the IRR is fairly small, and the large additional investment just before a loss drags the MWRR down.

### TWRR Calculation

We break it down into subperiods:

• Subperiod 1 (Year 1): Start = \$100,000; End = \$110,000. Return = 10%.  
• Subperiod 2 (Year 2): Start = \$510,000 (including the new \$400,000); End = \$484,500. Return = \\(\frac{484{,}500 - 510{,}000}{510{,}000} = -5\%\\).

Now TWRR is computed:

{{< katex >}}
\text{TWRR} = \Big((1 + 0.10) \times (1 - 0.05)\Big)^{1/2} - 1
{{< /katex >}}
{{< katex >}}
= (1.10 \times 0.95)^{1/2} - 1
{{< /katex >}}
{{< katex >}}
= (1.045)^{1/2} - 1 \approx 0.022 - 1 = 2.2\%
{{< /katex >}}

So the TWRR for the two-year period is about 2.2% per year. The MWRR, however, will be closer to something negative or really low if you do the IRR calculation because the large deposit arrived right before the negative return. This difference highlights precisely why personal investors might say “I only got X%!” while a manager’s track record might say “We achieved Y%.”

## Best Practices, Common Pitfalls, and Challenges

1. Use the correct measure depending on your purpose. TWRR if you’re evaluating manager skill, MWRR if you want your personal experience.  
2. Watch out for short time frames. Over very short horizons, the effect of large inflows/outflows on MWRR can be significant, and TWRR might also appear distorted if the number of subperiods or data points is too few.  
3. Overreliance on TWRR can mask poor timing decisions by investors. Conversely, it highlights manager skill.  
4. Make sure to define your subperiods consistently. TWRR can vary if you break your timeline incorrectly or skip certain cash flows.  
5. For actual GIPS compliance, detailed guidelines prescribe how to handle partial period flows.  
6. Double-check the sign of your contributions—accidentally flipping inflows and outflows can lead to nonsensical IRR solutions.  

## Exam Tips and Final Thoughts

If you’re preparing for the CFA exam, be ready to:  
• Memorize the IRR approach for MWRR and the geometric linking approach for TWRR.  
• Recognize scenarios where MWRR differs greatly from TWRR—especially with large or frequent inflows/outflows during a measurement period.  
• Know how GIPS influences the recommended usage of TWRR for performance reporting.  
• Practice identifying which method is more appropriate in different real-world contexts (e.g., personal client vs. mutual fund track record).  
• Carefully handle subperiod calculations: a small arithmetic slip can lead to the wrong TWRR.  

In my opinion—well, maybe you’ve guessed it—understanding MWRR vs. TWRR can significantly clarify how one’s portfolio truly performs and how managers should be judged. Yes, it can be a bit tricky at first, but once you get the hang of it, you’ll wonder how you ever measured returns any other way.

## References and Further Exploration

- Global Investment Performance Standards (GIPS), CFA Institute:  
  https://www.cfainstitute.org/en/ethics-standards/gips-standards  
- Spitzer, J. & Singh, S. (2011). Rate-of-Return Measurement without Time Weighted Returns.  
- Maginn, J. & Tuttle, D. (2007). Managing Investment Portfolios. CFA Institute.  
- CFA Program Curriculum, particularly topics covering performance evaluation and manager selection.

---

## Mastering Money‑Weighted vs. Time‑Weighted Returns: Practice Quiz

{{< quizdown >}}

### Which of the following statements best describes the primary characteristic of a money-weighted rate of return (MWRR)?

- [ ] It weights each subperiod’s return proportionally based on the length of the subperiod.  
- [x] It explicitly incorporates the size and timing of cash flows through an internal rate of return calculation.  
- [ ] It assesses a portfolio’s average holdings at each month-end.  
- [ ] It is always higher than a comparable time-weighted rate of return.  

> **Explanation:** MWRR is essentially the IRR for a series of cash flows, focusing on the actual dollar amounts invested at different times.

### An investor wants to know the impact of the timing of her contributions on her overall return over five years. Which return measure is most appropriate?

- [ ] Time-weighted rate of return.  
- [x] Money-weighted rate of return.  
- [ ] Arithmetic mean return.  
- [ ] Median return.  

> **Explanation:** MWRR clarifies the effect of contributions and withdrawals and is thus most appropriate to measure her personal experience.

### In which of the following scenarios is time-weighted rate of return (TWRR) typically preferred?

- [x] When comparing different portfolio managers on a level playing field.  
- [ ] When investors care about their actual cash contributions more than the manager’s performance.  
- [ ] When returns are always positive and large inflows happen after the gains.  
- [ ] When measuring the selection of asset classes in private equity.  

> **Explanation:** TWRR is the industry standard for evaluating portfolio managers because it neutralizes external cash flows, allowing an apples-to-apples comparison.

### Which of the following is true regarding the relationship between MWRR and TWRR?

- [ ] MWRR always exceeds TWRR by a fixed margin.  
- [ ] They are identical if cash flows exist but returns are positive.  
- [x] They can differ greatly if large cash contributions and withdrawals occur in the measurement period.  
- [ ] Their difference is generally negligible and ignored in performance reports.  

> **Explanation:** MWRR and TWRR can diverge substantially when timing and magnitude of contributions/withdrawals are significant.

### Suppose a portfolio sees a 10% return in Year 1. Right before Year 2, a large deposit is made, and the portfolio then experiences a 15% loss in Year 2. Which statement regarding TWRR vs. MWRR is most accurate?

- [x] TWRR will focus on each year’s return equally, whereas MWRR will disproportionately reflect the large deposit made before the loss.  
- [ ] TWRR will produce the same value as MWRR due to the large deposit.  
- [ ] MWRR will only count the return on new flows.  
- [ ] TWRR will penalize the portfolio more than MWRR because it is time-based.  

> **Explanation:** TWRR gives equal weight to each year’s return, but MWRR heavily penalizes the portfolio for having more capital invested during the loss year.

### Which method predominantly neutralizes the effect of external contributions and withdrawals when evaluating a manager’s performance?

- [ ] Internal rate of return.  
- [ ] Capital asset pricing model (CAPM).  
- [x] Time-weighted rate of return.  
- [ ] Modified Dietz method.  

> **Explanation:** TWRR is designed explicitly to exclude the effect of external cash flows, making manager evaluation fairer.

### What role do subperiod returns play in calculating TWRR?

- [x] Each subperiod’s return is calculated independently, then they’re geometrically linked.  
- [ ] Each subperiod’s return is averaged arithmetically.  
- [ ] Subperiod returns are used only if no cash flows occur.  
- [ ] Subperiod returns are irrelevant, as TWRR is an IRR approach.  

> **Explanation:** TWRR is found through a geometric linkage of subperiod returns, ensuring each subperiod’s performance is equally weighted.

### Which return measure is recommended by the Global Investment Performance Standards (GIPS) for performance reporting?

- [ ] Money-weighted rate of return.  
- [ ] Dollar-weighted rate of return.  
- [x] Time-weighted rate of return.  
- [ ] Jensen’s alpha.  

> **Explanation:** Under GIPS, TWRR is the primary standard in performance reporting to ensure comparability and fairness.

### In a period of high market volatility and frequent investor withdrawals, which statement accurately captures the difference between MWRR and TWRR?

- [x] MWRR may be significantly lower or higher than TWRR, depending on the timing and size of the withdrawals.  
- [ ] MWRR and TWRR converge when volatility is high.  
- [ ] TWRR will fully capture the investor’s personal experience of returns.  
- [ ] Both methods will produce identical results, but at different times.  

> **Explanation:** With volatile markets and frequent withdrawals, MWRR can deviate heavily from TWRR based on when the investor added or removed money.

### True or False: The time-weighted rate of return is often used by individual investors to assess the impact of their personal contributions and withdrawals.

- [ ] True  
- [x] False  

> **Explanation:** Individual investors typically care about the impact of their cash flows, which is captured by MWRR (IRR). TWRR is used to evaluate manager performance by neutralizing personal cash flows.

{{< /quizdown >}}
