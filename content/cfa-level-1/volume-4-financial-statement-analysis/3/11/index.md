---
title: "Fair Value Hierarchy under IFRS 13 and ASC 820"
description: "Explore the three-tier fair value measurement system governed by IFRS 13 and ASC 820, focusing on valuation inputs, disclosures, and practical strategies to address Level 1, Level 2, and Level 3 assets and liabilities."
linkTitle: "3.11 Fair Value Hierarchy under IFRS 13 and ASC 820"
date: 2025-03-21
type: docs
nav_weight: 4100
canonical: "https://FinancialAnalystGuide.com/cfa-level-3/volume-1-asset-allocation"
license: "© 2025 Tokenizer Inc. CC BY-NC-SA 4.0"
---

Understanding how fair value measurements flow into a company’s balance sheet is one of those topics that can make your head spin—especially when first introduced. I remember back in my early days, helping a colleague puzzle through a tricky derivative valuation that landed us squarely in the realm of Level 3 inputs. Honestly, it felt like we were mixing potions in a wizard’s laboratory. But don’t worry: IFRS 13 (for most international standards) and ASC 820 (for US GAAP) provide some valuable guidelines so that we’re not just guessing. Let’s walk through the fair value hierarchy, explore how it’s properly applied, and see why it matters for robust financial analysis.

## Why Fair Value Matters

Before diving into the hierarchy itself, it’s helpful to grasp why fair value is so critical. In an ideal world, the carrying amounts on a balance sheet would match exactly what you’d receive if you sold an asset or paid to settle a liability in an orderly transaction. That’s essentially what “fair value” aims to capture. Fair value measurement is intended to provide a snapshot of the current market-based or market-simulated worth of an asset or liability, rather than cost-based or historical amounts alone.

This approach can significantly impact how analysts see a company’s financial health. After all, if an entity holds a large portfolio of assets measured at fair value, the reliability of those measurements becomes super important in assessing its net worth and risk profile. IFRS 13 and ASC 820 address this concern by laying out a structured approach—often called the fair value hierarchy—to pick the most relevant inputs and ensure consistent application across different entities.

## The Three-Level Fair Value Hierarchy

The fair value hierarchy sets a clear priority for the kinds of inputs to use in determining fair value. IFRS 13 and ASC 820 align closely on this concept, labeling each level based on the observability and reliability of inputs. Let’s see how that looks:

Level 1: Quoted Prices in Active Markets for Identical Assets or Liabilities  
• If you’ve ever pulled up a stock’s price on a major exchange (like the New York Stock Exchange) and said, “That’s the price right there,” you’ve used a Level 1 input.  
• These prices are typically the most reliable because they’re based on actual trades in active markets—making them less subject to guesswork or modeling assumptions.

Level 2: Observable Inputs Other Than Quoted Prices  
• Sometimes, you can’t get a direct quote for your exact asset or liability, but you can observe a price for something pretty similar. For instance, let’s say you have a corporate bond that’s not heavily traded. You might look to yields on corporate bonds with similar credit ratings and maturities to estimate value.  
• Level 2 includes inputs such as:  
  – Quoted prices for similar (but not identical) assets in active markets.  
  – Quoted prices for identical or similar assets in markets that aren’t very active.  
  – Observable interest rates, yield curves, implied volatilities, or credit spreads.  
• The big takeaway is that these inputs are still mostly market-based, but you’ll need to do more adjusting or analysis than for Level 1.

Level 3: Unobservable Inputs  
• Now here’s where the rubber meets the road. If market-based inputs are insufficient or nonexistent, you turn to internal modeling. That often involves discounting projected future cash flows or using other assumptions that reflect how the market “would” price the item.  
• Because these valuations can rely heavily on management’s assumptions, the risk of error or bias is higher. I’ve had plenty of debates with finance teams about how best to incorporate certain inflation rates or risk premiums in a discounted cash flow. Each small tweak can change the final fair value significantly.  
• A big chunk of complex financial instruments, intangible assets, or specialized real estate might fall here if they lack active market quotes or close proxies.

## Visualizing the Fair Value Hierarchy

Sometimes, a picture is worth a thousand words. Here’s a quick diagram illustrating the progressive move from highly observable inputs (Level 1) to highly subjective ones (Level 3):

```mermaid
graph LR
    A["Level 1 <br/>(Quoted Prices in Active Markets)"] --> B["Level 2 <br/>(Observable Inputs, Adjusted)"]
    B["Level 2 <br/>(Observable Inputs, Adjusted)"] --> C["Level 3 <br/>(Unobservable Inputs)"]
```

As you move down the chain, you rely more on internal assessments and complex modeling—hence increased room for subjectivity.

## Measurement Techniques and Preference

Both IFRS 13 and ASC 820 emphasize a “market participant” perspective. This means using assumptions that unrelated, knowledgeable, and willing buyers and sellers would use in a real transaction, not just what you personally think is right.

• Priority: Always try Level 1 first. If it’s not available because there’s no active market, go to Level 2. If relevant observable inputs are still lacking, you end up at Level 3.  
• Techniques: Common valuation approaches include the market approach (comparing similar assets), the cost approach (estimating replacement cost), and the income approach (discounting expected cash flows).  
• Consistency: Use the same valuation approach as much as possible over time unless there’s a good reason not to—like new information about how the asset should be priced.

## Disclosures and Transfers Between Levels

When it comes to disclosures, IFRS 13 and ASC 820 are pretty clear: companies must describe not only which level of inputs they used but also how they arrived there. If assets or liabilities move from one level to another during the reporting period—say, a security that was once illiquid but is now trading more frequently, shifting from Level 3 to Level 2—management should highlight and explain that. Transparency is the name of the game. Without it, investors (and regulators) might struggle to grasp the real risk embedded in the company’s valuations.

Key disclosures often include:  
• The level of fair value measurements for each major asset or liability category.  
• The valuation techniques applied (e.g., discounted cash flow, matrix pricing).  
• Significant unobservable inputs used in Level 3 valuations (such as discount rates, growth rates).  
• Sensitivity analysis, often showing how a slight change in a key assumption might affect the fair value estimate.  

For analysts, these disclosures are gold. They tell you how comfortable you can be with the reported fair value. If a big chunk of a firm’s assets sits in Level 3, it might be prudent to factor in some margin of error or question management further about their assumptions—particularly in times of economic volatility.

## Impact on the Balance Sheet and Earnings

Some fair value measurements go straight to the income statement (through profit or loss), while others can appear in other comprehensive income and accumulate in equity. This depends on the nature of the asset or liability, as well as your local GAAP or IFRS rules on classifying changes in fair value. Regardless, the volatility introduced by fair value accounting can be significant. For instance, if a company revalues a Level 3 intangible upward and recognizes a gain, that can boost net income. Alternatively, downward revaluations may lead to sharp drops in reported earnings.  

From an exam perspective (especially as you advance through the CFA program), you might be asked to evaluate how these changes affect financial ratios, financial performance trends, or risk assessments. This is why understanding the fair value hierarchy is so crucial. If you’re looking at two companies with the same nominal asset values, but one measures them using Level 1 quotes while the other relies on unobservable Level 3 inputs, you’re comparing apples to oranges in terms of reliability and liquidity.

## Practical Examples

1. Equity Securities in an Active Market (Level 1)  
   • Let’s say you hold 1,000 shares of a big company listed on a major exchange. You can just look at the quoted price in real time and multiply. That’s as clean as it gets.  

2. Corporate Bond Valuation (Level 2)  
   • Suppose you hold a corporate bond that’s not heavily traded. You might look at:  
     – Quoted prices for bonds from a similar issuer or with a similar maturity and credit rating.  
     – Quoted market data from recent transactions of that bond if not frequently traded.  
   • The final value is still based on an observable market reference, but you’ll make a small adjustment for the bond’s unique features.

3. Specialized Machinery or Intellectual Property (Level 3)  
   • Now imagine you have proprietary software with no direct market competition. Its value depends on expected future cash flows and intangible benefits. You’d likely use an income approach, discounting future royalties or licensing fees. Since there’s no active market for this specific intangible, the key inputs (like discount rate, future growth, volatility in cash flows) are mostly your own assumptions.  

## Challenges and Best Practices

• Management Bias: Because Level 3 valuations rely heavily on internal assumptions, there’s a risk of optimism bias or manipulative assumptions.  
• Complexity in Modeling: Complex instruments—such as exotic derivatives—might require advanced models. Slight errors in calibration can result in big differences.  
• Volatility: Changes in market conditions can cause sudden shifts in the fair value, especially for Level 2 or Level 3 assets. This can affect loan covenants tied to net worth or leverage ratios.  
• Audit Scrutiny: External auditors often focus intently on fair value measurements—especially Level 3. They might engage their own valuation specialists, which can take time and cost money.  
• Continuous Monitoring: IFRS 13 and ASC 820 encourage continuous re-assessment of markets and assumptions. Just because your asset was Level 2 last year doesn’t mean it can’t become Level 1 or 3 this year if the market changes.

## Analyst Focus and Risk Assessment

If you’re looking at a company with a pile of Level 3 assets, it’s worth digging deeper into how management arrived at those fair values. It might help to see if they bring in external valuation experts or if they run periodic calibration checks against actual sales. You also might try a scenario analysis: “What if interest rates were a percent higher?” or “What if the discount rate used for those intangible assets were more conservative?” The difference can be stark, revealing how sensitive the firm’s reported net worth is to certain assumptions.

Another focal point might be whether the company has changed its approach over time. If you notice a shift from using market data to using internal assumptions, ask why. Has the liquidity of the asset changed, or is the company responding to a more intangible factor? Not all moves to Level 3 are suspicious, but they do warrant scrutiny.

## Ties to Other Topics

Fair value concepts often pop up in:  
• Impairment testing for long-lived assets (see section 6.2 of this Volume).  
• Financial instruments disclosure (section 3.3).  
• Off-balance-sheet items (section 9.1), especially if certain structured entities are measured at fair value.  
• Consolidation issues (in business combinations, Chapter 10), where the allocation of purchase price to assets and liabilities significantly depends on fair value estimates.

## Conclusion

Fair value measurements under IFRS 13 and ASC 820 aren’t just about picking a number and running with it. They require a careful balance of market data, modeling techniques, and transparent disclosures. Relying on more observable inputs (Level 1 or 2) is typically safer, but many modern instruments end up in that dreaded Level 3 zone, where everything hinges on “unobservable” assumptions. By paying close attention to disclosures, an analyst can gauge how trustworthy those valuations are and how much management’s own perspective influences reported results. This is vital for making informed judgments about a company’s financial viability and performance trends.

It may feel a bit intimidating at first, especially when you see complicated valuation schedules in the notes to the financial statements. But with consistent practice—and maybe a teensy bit of coffee-fueled patience—you’ll be fluent in the essential “levels” behind fair value measurement.

---

**References and Further Reading**  
• IFRS 13 (Fair Value Measurement): https://www.ifrs.org  
• FASB ASC 820 (Fair Value Measurement): https://fasb.org/  
• Valuation: Measuring and Managing the Value of Companies, by McKinsey & Company  

---

## Test Your Knowledge: Fair Value Hierarchy Quiz

{{< quizdown >}}

### Which of the following statements best describes Level 1 inputs in the fair value hierarchy? 
- [x] They are quoted prices in active markets for identical assets or liabilities. 
- [ ] They are unobservable inputs. 
- [ ] They require the use of a discounted cash flow model. 
- [ ] They must be validated by a third-party valuation specialist. 

> **Explanation:** Level 1 inputs are observable prices in active markets for identical assets or liabilities, making them the most reliable.


### A corporate bond is normally valued using market prices for similar instruments. Under IFRS 13 and ASC 820, what level of the fair value hierarchy would this generally fall under?
- [ ] Level 1
- [x] Level 2
- [ ] Level 3
- [ ] It cannot be classified under the hierarchy.

> **Explanation:** Level 2 is used when valuation relies on observable market data for similar assets but not identical ones.


### Which of the following would most likely be classified as a Level 3 input?
- [ ] Quoted price for a publicly traded common stock 
- [ ] Published yield curve data for government securities 
- [x] Discount rate assumptions for a specialized intangible asset 
- [ ] A broker quote for an actively traded municipal bond

> **Explanation:** Unobservable or entity-specific assumptions (like discount rates for specialized intangible assets) classify as Level 3.


### When shifting from using a Level 2 input to a Level 3 input in fair value measurement, what is the primary concern for analysts?
- [x] Increased subjectivity and reliance on management’s assumptions 
- [ ] Better precision in valuation 
- [ ] Fewer disclosure requirements 
- [ ] Mandatory use of an external valuation expert 

> **Explanation:** Moving to Level 3 increases reliance on internal estimates, raising concerns about bias or limited verifiability.


### According to IFRS 13 and ASC 820, which of the following actions must companies undertake regarding fair value disclosures?
- [x] Disclose the valuation technique, inputs used, and any transfers between levels 
- [ ] Only disclose gains or losses from Level 3 measurements 
- [x] Provide sensitivity analyses for significant Level 3 inputs 
- [ ] Provide no additional disclosures (fair value measurements are sufficient by themselves)

> **Explanation:** Companies must be transparent by outlining techniques, important inputs, and transfers between levels, especially for Level 3.


### What is the main reason Level 1 inputs are considered the most reliable?
- [x] They reflect actual market transactions for identical assets or liabilities 
- [ ] They allow for heavy reliance on management’s assumptions 
- [ ] They are published only by investment banks 
- [ ] They always yield a stable price 

> **Explanation:** Level 1 inputs come from active, identical trades in the marketplace and thus require minimal adjustments or assumptions.


### Which of the following best illustrates a potential pitfall of Level 2 inputs?
- [x] Limited trading in the comparable securities can reduce reliability 
- [ ] They always overestimate valuation 
- [x] They rely on purely unobservable assumptions 
- [ ] They are not widely accepted by accounting standards 

> **Explanation:** Level 2 inputs can be reliable but might be limited if comparable securities lack frequent or high-volume trading. (Note that Level 2 does rely on observable data—but sometimes in less active markets.)


### If a firm’s intangible asset valuations are consistently updated using internal projections of growth rates and discount rates, what should investors be most cautious about?
- [x] Potential management bias affecting valuations 
- [ ] Unnecessary reliance on Level 1 inputs 
- [ ] The intangible assets automatically qualify for Level 2 
- [ ] Fluctuations in quotations from active exchange markets 

> **Explanation:** Internally generated projections, belonging to Level 3, may lead to bias or incorrect assumptions that materially affect fair value.


### Which of the following sets of information would you expect to appear in the notes to financial statements under IFRS 13 and ASC 820?
- [x] A tabular disclosure of the fair value hierarchy for each class of assets or liabilities, the valuation techniques used, and explanations of transfers 
- [ ] Only the final fair values without explanation of techniques 
- [ ] Observed trading volumes without the final fair values 
- [ ] None of the above are permissible 

> **Explanation:** IFRS 13 and ASC 820 require detailed note disclosures that reference fair value levels, valuation methods, and transfers between levels.


### True or False: 
Under IFRS 13 and ASC 820, any asset or liability that cannot be measured at Level 2 must automatically be classified at Level 3.
- [x] True
- [ ] False

> **Explanation:** If relevant Level 1 or Level 2 inputs aren’t available or appropriate, companies default to Level 3, which uses unobservable inputs.

{{< /quizdown >}}
