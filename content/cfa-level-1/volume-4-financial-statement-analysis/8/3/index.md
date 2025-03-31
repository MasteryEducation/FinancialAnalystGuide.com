---
title: "Deferred Tax Assets and Liabilities"
description: "Comprehensive discussion of how deferred tax assets and liabilities arise, their impact on financial statements, and key considerations under IFRS and US GAAP."
linkTitle: "8.3 Deferred Tax Assets and Liabilities"
date: 2025-03-21
type: docs
nav_weight: 8300
canonical: "https://FinancialAnalystGuide.com/cfa-level-3/volume-1-asset-allocation"
license: "© 2025 Tokenizer Inc. CC BY-NC-SA 4.0"
---

## Introduction
It’s funny: I remember the first time I tried to reconcile my company’s tax returns with our financial statements. I was sitting there thinking, “Wait, how can profit be different for accounting than it is for tax? Aren’t they the same thing?” Well, the truth is that you often get differences in how revenue and expenses are recognized, leading to something called deferred taxes. These “deferred” bits can show up either as assets (DTAs) or liabilities (DTLs), and they have significant implications for a company’s cash flow forecasts, equity valuations, and overall financial health.

Below, we’ll explore exactly how DTAs and DTLs arise, their impact on financial statements, and the key issues (and potential pitfalls) analysts should watch for.

## Setting the Stage: The Difference Between Accounting and Tax
At a high level, financial statements follow certain accounting standards (like IFRS or US GAAP), while tax returns follow tax laws and regulations set by jurisdictions. These two sets of rules aren’t always aligned. For instance, you might have an expense deducted immediately for tax purposes but capitalized and depreciated more slowly on the financial statements.

Over time, these timing differences create “temporary differences” between the carrying amounts of assets and liabilities in the financial statements and their tax bases in the tax returns. When these timing differences reverse in future periods, the effect on reported profit or loss also reverses. And that’s what leads to the recognition of deferred tax assets or liabilities.

## Key Terms and Concepts
Before diving deeper, let’s clarify a few core ideas:

• Temporary Difference: The difference between the value of an asset or liability on the balance sheet (its “carrying amount”) and the value recognized for tax purposes (its “tax base”).  
• Deferred Tax Asset (DTA): Indicates a probable reduction in future taxes.  
• Deferred Tax Liability (DTL): Indicates future taxable amounts that companies expect to pay when temporary differences reverse.

You might also hear about permanent differences—discrepancies between accounting income and taxable income that never reverse (for example, fines or penalties that aren’t deductible for tax). However, permanent differences do not generate DTAs or DTLs because they never reverse.

## The Mechanics of DTAs and DTLs
DTAs and DTLs typically arise because of differences in revenue or expense recognition across accounting and tax regimes. Let’s break that down:

### Deferred Tax Assets
Picture a scenario where a company recognizes an expense on its financial statements before it is recognized for tax purposes (or recognizes revenue more slowly in the financial statements than for tax). As a result:  
• The company’s accounting profit is lower than its taxable profit today.  
• The larger taxable profit means the company pays more tax currently.  
• But eventually, when that expense becomes deductible or the revenue is recognized for the financial statements, future taxable profit will be reduced.  

Hence, you get a DTA, which represents the future tax benefits the company can use to lower its taxes in subsequent periods. Another classic example is a net operating loss (NOL) carryforward: if a company has a big net operating loss in the current period, it may not fully use that loss this year, but it can apply it to reduce taxable income in future years. That potential future tax break is captured as a DTA.

### Deferred Tax Liabilities
Now flip the story. Suppose a firm uses an accelerated depreciation method for tax (which lowers taxable income today) but uses a slower method of depreciation on the financial statements (which results in relatively higher accounting income). This means:  
• The company’s accounting profit is higher than its taxable profit right now (since for tax, the expense is bigger).  
• The company pays less tax today.  
• In the future, though, depreciation expense for tax purposes will be smaller (because most of the depreciation was frontloaded), leading to higher taxable income.  

Those future higher taxable profits imply higher future tax payments—hence, a DTL. It’s essentially the company’s deferral of current taxes, which will come due later.

## Visualizing the Process
Below is a simple Mermaid diagram to illustrate how we move from a temporary difference to a deferred tax position:

```mermaid
flowchart LR
    A["Carrying Amount (Financial Reporting)"] --> B["Compare with Tax Base <br/>(Tax Reporting)"]
    B --> C["Identify Temporary <br/>Difference"]
    C --> D["Multiply by Enacted <br/>Tax Rate"]
    D --> E["Determine <br/>DTA or DTL"]
```

## Balance Sheet Implications and Interpretation
When you open a company’s balance sheet, you might notice a line item for “Deferred Tax Assets” or “Deferred Tax Liabilities.” Depending on the size and trend:

• A net DTA (where DTAs exceed DTLs) typically indicates the company expects to reduce future tax expenses. However, realize that a large DTA is only useful if the company will generate enough taxable income in the future to utilize it.  
• A net DTL (where DTLs exceed DTAs) can imply future tax outflows—though the timing matters a lot. If those outflows won’t happen for decades, the effect on near-term valuations might be modest.

### Effect on Ratios
Deferred taxes can influence liquidity and solvency ratios. For instance, a large DTL can understate the “true” degree of long-term obligations. A big DTA might overstate a firm’s solvency if the firm is unlikely to realize those future benefits (for example, if it’s consistently losing money).

## Analyzing Deferred Tax Assets
Ask yourself: “Is the company truly going to earn enough profits to use this DTA?”

### Valuation Allowances and Impairments
Under US GAAP, if it’s more likely than not (i.e., >50% probability) that part of the DTA won’t be realized, the company records a valuation allowance, which lowers the net DTA. In IFRS (IAS 12), a firm writes down the DTA if it’s no longer probable that the DTA can be fully realized—so the concept is similar, though the exact mechanics differ a bit. Either way, the key is that management relies on future projections of taxable income. If those projections are overly optimistic and never materialize, DTAs might get written down, causing a hit to earnings.

### Loss Carryforwards
One of the most common DTAs stems from loss carryforwards. Suppose a company has a big loss this year—and the tax code allows that loss to be applied against profits in future years. The firm can record that potential tax shielding effect as a DTA. Here, you’ll definitely want to evaluate the firm’s track record and any near-term expiration of carryforward periods (e.g., in some jurisdictions, you can only carry losses forward for a certain number of years).

### Example: Startup Company with Net Operating Losses
Imagine your friend starts a tech company that invests heavily in R&D. For the first two years, the company sees negative taxable income—so it builds up an NOL. That NOL could offset future profits once the product catches on. But what if the product flops? Well, then the DTA is less likely to be used, and you might see a big valuation allowance introduced or the DTA fully impaired.

## Analyzing Deferred Tax Liabilities
### Typical Sources
Commonly, DTLs arise from depreciation differences (accelerated for tax vs. straight-line for financial statements), or from revaluations if, under IFRS, the company chooses the revaluation model for fixed assets. Another scenario might be intangible assets recognized for accounting purposes but not for tax until later.

### Impact and Persistence
Since many DTLs relate to depreciation, they often reverse over the asset’s life. However, some DTLs might remain on the books for a long time if the company continues reinvesting in new assets and using accelerated methods for tax. In practice, this can create an almost permanent deferral of tax payments—though eventually, if you stop purchasing new assets, the difference reverses.

## Qualitative Disclosures and Footnotes
Companies typically break down current and deferred tax components of their total income tax expense. They often provide a schedule showing major sources of DTAs and DTLs (e.g., “Accelerated depreciation,” “Pension obligations,” “NOL carryforwards,” etc.). In addition, many firms disclose a rate reconciliation from the statutory tax rate to the effective tax rate. This reconciliation can help you see how much of the difference is driven by deferred taxes, tax credits, foreign tax rate differentials, or other factors.

Reading these notes carefully can reveal:  
• Whether the company engages in strategic tax planning, like accelerating deductions.  
• Potential changes in tax legislation that might affect DTAs or DTLs.  
• The portion of DTAs subject to short expiration windows (which could be at risk of going unused).

## Strategic and Valuation Considerations
When you build a financial model or do a multi-period valuation, you need to consider the expected reversal of DTAs and DTLs in your cash flow estimates. For instance, if a company is systematically deferring its taxes, its near-term free cash flow might be inflated. At some point, that tax deferral might catch up, reducing future cash flows.

Assessing the reversal patterns can be especially important in mergers, acquisitions, or significant restructurings. In such transactions, DTAs might be used to lower the combined company’s tax liability, which could boost the merger’s net present value. However, certain tax rules limit the usage of NOL carryforwards or other deferred tax benefits after a change in ownership.

## Real-World Case Study
Take a well-known manufacturing company that invests heavily in new equipment. If it applies an accelerated depreciation method for tax, the firm sees smaller taxable income now and, therefore, smaller current tax payments. Over many years, if the firm keeps renewing its equipment, its taxable income remains artificially lower than its accounting income, creating a growing DTL. Meanwhile, the stock might look very profitable from an accounting perspective, but you, as an analyst, should understand that some portion of the reported “savings” is just delayed rather than erased.

On the flip side, consider a pharma company that invests big time in R&D. Often, the intangible R&D costs are handled differently for tax and accounting. The mismatch can create a large DTA or DTL, depending on which recognition rules apply first. If the firm develops a blockbuster drug and profits soar, those DTAs can be used to offset future taxes. But if the firm’s pipeline fails, there might be a big write-down of the DTA, hitting the income statement and spooking the market.

## Common Pitfalls
• Overlooking the Valuation Allowance: Some managers might “delay” establishing a valuation allowance on a deteriorating DTA to maintain higher reported net income.  
• Misreading DTLs as Permanent Financing: Although some DTLs persist for decades, they’re not free capital. Eventually, those taxes could be paid.  
• Not Considering Tax Rate Changes: If the government changes tax rates, the values of DTAs and DTLs must be recalculated, causing one-time hits or benefits.  
• Ignoring International Differences: In a multinational, different jurisdictions can have different tax positions. For more on how to handle foreign currency and overseas operations, refer to Section 11.2–11.3 in this volume.  

## IFRS and US GAAP
If you’re wondering about deeper rule-based differences, see Section 8.10 in this same chapter. In broad strokes, IFRS is governed by IAS 12 for income taxes, and US GAAP by ASC 740. While the logic is similar, you’ll find nuances in language (e.g., “valuation allowance” vs. “probability test”), and certain disclosure requirements might differ. The fundamental concept, though—calculating a temporary difference and multiplying by an enacted tax rate—remains consistent.

## Practical Examples Using Simple Numbers
Let’s walk through a very quick numeric example (the numbers are small, but the principle is the same for any magnitude):

1. Suppose you buy a machine with a cost of $100. For financial reporting, you depreciate it over 5 years on a straight-line basis: $20 expense per year. For tax, you use an accelerated pattern: $30 expense in Year 1, $25 in Year 2, $20 in Year 3, $15 in Year 4, and $10 in Year 5 (the total is still $100).  
2. In Year 1, your financial statements show $20 in depreciation, but tax records show $30.  
3. If that was your only difference, your accounting income is $10 higher than your taxable income. That difference times the tax rate (let’s say 25%) gives a $2.50 DTL for Year 1.  
4. Over time, as your tax depreciation expense shrinks relative to your financial statement depreciation, the DTL reverses.

Conversely, if you recognized an expense earlier for accounting than for tax, you’d get a DTA.

## Best Practices for Analysts
• Compare the company’s deferred tax footnotes with industry peers. Any significant deviations might mean the company is using aggressive tax strategies.  
• Consider the effect of potential future losses on the realizability of DTAs.  
• Model the timing of DTL reversals to avoid overstating free cash flow.  
• Keep an eye on changes in corporate tax rates, as these can immediately revalue the deferred balances.

## Conclusion
Deferred taxes might seem like a dull footnote, but they can radically reshape a company’s reported profits and future outlook. Whether you’re analyzing a startup’s carryforwards or a global manufacturer’s depreciation policies, pay close attention to how these balances are built, maintained, and ultimately reversed. And, of course, don’t be afraid to dive into the footnotes—that’s where you’ll find the real story of how a company’s future tax positions might unfold.

## References and Further Reading
• CFA Institute. “Deferred Taxes in Financial Reporting” in CFA Program Curriculum.  
• IAS 12, IFRS.org.  
• EY. “Subsequent Measurement of Deferred Tax Assets and Liabilities.”  
• FASB ASC 740 for US GAAP guidance.  

---

## Test Your Knowledge: Core Concepts of Deferred Taxes

{{< quizdown >}}

### Which statement best describes a deferred tax asset (DTA)?

- [ ] It arises when accounting profit is consistently higher than taxable income in the current period.  
- [x] It indicates a potential reduction in future taxes due to timing differences or carryforward benefits.  
- [ ] It represents a liability that will be paid when timing differences reverse.  
- [ ] It is reported only if management has a valuation allowance.  

> **Explanation:** A DTA arises when a company expects future tax reductions, typically because accounting profit is lower than taxable income today or due to carryforwards.

### Which of the following is a common source of a deferred tax liability (DTL)?

- [x] Using accelerated depreciation for tax and straight-line for financial reporting.  
- [ ] Receiving payments in advance of providing goods or services.  
- [ ] Recording a large net operating loss in the current year.  
- [ ] Impairing a long-term debt instrument.  

> **Explanation:** Accelerated depreciation for tax typically lowers taxable income now, creating a DTL that reverses in future periods when the tax depreciation expense decreases.

### A large DTA on the balance sheet may be of limited value if:

- [x] The company might not generate enough taxable income to utilize it.  
- [ ] It is accompanied by high levels of cash.  
- [ ] It is a result of accelerated depreciation.  
- [ ] Management has provided a detailed footnote disclosure.  

> **Explanation:** DTAs only reduce taxes if the company has adequate future taxable income. Otherwise, part or all of the DTA may remain unrealized.

### What happens if a company’s forecast indicates that it is more likely than not to realize only half of its DTA?

- [x] The company establishes (or increases) a valuation allowance for the portion it will not realize.  
- [ ] The DTA balance remains unchanged until more data comes in.  
- [ ] All of the DTA is immediately written off to retained earnings.  
- [ ] The deferred tax liability must be reduced by half.  

> **Explanation:** Under US GAAP, if it appears more likely than not that part of a DTA is unrecoverable, the firm records a valuation allowance, which reduces the net DTA.

### Which item typically does NOT generate a temporary difference leading to a deferred tax?

- [ ] Differences in depreciation methods between financial reporting and tax.  
- [ ] Accruals like warranty provisions that are recognized differently for tax.  
- [x] Fines or penalties that are non-deductible for tax.  
- [ ] Unrealized gains recognized under fair value accounting.  

> **Explanation:** Permanent differences such as non-deductible fines or penalties do not reverse in future periods, so they do not lead to deferred tax items.

### If management aggressively estimates future profit to avoid establishing a valuation allowance on a DTA, which risk arises?

- [ ] Overstated DTL, understated net income.  
- [ ] Understated equity, overstated tax expense.  
- [x] Overstated assets, overstated net income.  
- [ ] Understated liabilities, understated net income.  

> **Explanation:** Inflated profit projections can lead to an underestimation of the necessary valuation allowance on a DTA, thus overstating assets and net income.

### In IFRS, a DTA is recognized:

- [x] If it is probable that future taxable profits will be available.  
- [ ] Only when there is a specific tax ruling granting deferred benefits.  
- [ ] Always, as soon as the company identifies a temporary difference.  
- [ ] Only if it is more likely than not that the timing difference is permanent.  

> **Explanation:** Under IAS 12, a DTA is recognized if it is probable (i.e., more likely than not) that there will be sufficient future taxable profits.

### When a company frequently purchases new assets and uses accelerated depreciation for tax each time:

- [x] DTLs can persist on the balance sheet for extended periods.  
- [ ] DTAs will grow significantly each year.  
- [ ] The company’s effective tax rate will increase steadily.  
- [ ] There is no effect on the balance sheet.  

> **Explanation:** If each new asset also adopts accelerated depreciation, the temporary difference (and hence the DTL) may never fully reverse, creating an ongoing balance.

### If the corporate tax rate decreases, how are existing deferred tax balances affected?

- [x] Both DTAs and DTLs must be remeasured using the new tax rate.  
- [ ] DTAs stay at the old rate, but DTLs adjust to the new rate.  
- [ ] No change is required until the timing differences reverse.  
- [ ] DTAs become liabilities if the company remains unprofitable.  

> **Explanation:** Under both IFRS and US GAAP, deferred tax balances must reflect the enacted tax rate that will apply when the temporary differences reverse, so a reduction means both DTAs and DTLs decrease in value.

### Deferred Tax Liability balances typically reflect:

- [x] Future tax payments arising from current temporary differences where accounting income exceeds taxable income.  
- [ ] Past periods’ benefits that have already been realized.  
- [ ] A permanent difference that will never reverse.  
- [ ] Only intangible assets that are not tax deductible.  

> **Explanation:** A DTL signals future tax payments for timing differences—primarily cases in which the firm currently pays less tax than the financial statements’ accounting shows, but it will pay more later when those differences reverse.

{{< /quizdown >}}
