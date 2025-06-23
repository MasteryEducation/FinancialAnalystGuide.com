---
title: "Modifications, Forfeitures, and Repricing"
description: "Modifications, Forfeitures, and Repricing in Executive Compensation: A thorough guide to IFRS and US GAAP differences, incremental compensation expense, and the investor perspective."
linkTitle: "10.2 Modifications, Forfeitures, and Repricing"
date: 2025-03-21
type: docs
nav_weight: 10200
canonical: "https://FinancialAnalystGuide.com/cfa-level-2/volume-4-financial-statement-analysis"
license: "© 2025 Tokenizer Inc. CC BY-NC-SA 4.0"
---

## Context and Importance

Executive compensation can be an emotional topic—just mention stock options to a group of finance folks, and watch the discussions take off. Here’s the thing: compensation structures are not just about paying people more or less; they're also about aligning managerial incentives with shareholder interests. You know, the classic principal–agent problem. If executives stand to benefit from a rising share price, the theory is they'll work extra hard to ensure the firm’s success. But the real world often throws curveballs in the form of changing economic conditions, adjustments in performance metrics, or even big shifts in corporate strategy. That’s exactly where modifications, forfeitures, and repricing come into play.

These practices can significantly affect reported compensation expenses, have direct and indirect implications for corporate governance, and create waves in how analysts and investors perceive a company's financial health. So, in this discussion, we'll dive into:

• How modifications alter the terms and fair values of existing share-based awards.  
• Why forfeitures can reduce—or in some cases, complicate—the ultimate compensation expense.  
• What happens when companies decide to reprice options to keep morale high (or just to keep employees from jumping ship).  
• How IFRS and US GAAP treat these events slightly differently.  
• Best practices and investor perspectives.

Let’s take a closer look at each topic and figure it all out.

## Key Concepts in Modification Accounting

Before anything else, let’s define what we mean by a “modification.” Under both IFRS and US GAAP, a modification occurs when the terms or conditions of a share-based payment award are changed in a manner that either affects the award’s total fair value, vesting conditions, or both. This might include extending the vesting period, easing performance conditions, or—for better or worse—raising or lowering the exercise price.

### The Fair Value Angle

When these awards are modified, the primary question accountants (and exam-takers) must ask is: “Does this modification increase or decrease the fair value of the award?” This is important because any increment in fair value typically translates to an incremental compensation expense recognized in the financial statements. If the fair value decreases, you might think, “Nice, there’s a credit, right?” Actually, it’s not so simple. In many scenarios, the accounting standards (IFRS 2 or ASC 718) try to prevent a “negative" compensation benefit. Instead, they often keep the expense recognized to date and simply reflect that there’s no additional cost if the fair value is lower—though practical realities can get nuanced.

### Incremental Compensation Expense

Let’s say a company modifies an employee’s stock option to lower its exercise price from $50 to $30. Well, that’s obviously beneficial to the employee: the stock might be trading in the $35 to $40 range, so suddenly the option is in the money, or at least closer to the money. The differences in those fair values—before the modification versus after—become an “incremental compensation expense.” That cost hits the income statement over any remaining service period, or immediately if the award is fully vested.

Here’s a quick mini-example:

• Original strike price: $50  
• New strike price: $30  
• Fair value of original option: $8 per share  
• Fair value of modified option: $14 per share  

Incremental fair value = $14 − $8 = $6 per share. If the options are fully vested or only have a short vesting period left, you might see a near-immediate expense recognized for that additional $6 per share on all outstanding shares.

## Forfeitures: A Closer Look

Sometimes, employees leave before their awards have vested—maybe they move to a new company, retire early, or just depart for other reasons. In these scenarios, the unvested portion of the award is forfeited.

From an accounting standpoint, IFRS and US GAAP both typically require firms to estimate expected forfeitures at the grant date (or adoption date of the standard) and adjust the overall compensation expense accordingly. This is often referred to as the “forfeiture rate.” Why? Because if we don’t factor in forfeitures, we’d be overestimating how many awards will ultimately vest, leading to inflated compensation expense.

### Adjustments and Catch-Up

If actual forfeitures differ from the original expectation, companies must record a “catch-up” adjustment. Let’s imagine you initially projected a 5% forfeiture rate on your awards, but half your executive team leaves in a mass exodus (yikes!). That might mean your actual forfeiture rate is 20%. Suddenly, the firm has to revise its compensation expense downward to reflect that fewer awards actually vested.

Under IFRS 2, you must estimate forfeitures at the time of grant. Under US GAAP (ASC 718), you can still estimate forfeitures, but there has been guidance allowing a policy choice to recognize them as they occur. That said, for exam purposes, you typically assume both IFRS and GAAP will require an estimate—unless stated otherwise.

## Repricing: Holding Onto Talent

It’s easy to see why firms do this. The market takes a nosedive, and employees see their stock options deeply underwater (exercise price excessively above the current market price). It’s demoralizing, right? The intended incentive—stock-based pay—loses its effect. Hence, some companies choose to “reprice” those grants downward, effectively resetting the strike price to a lower level.

### The Consequence of Repricing

But here’s the rub—repricing generally increases the fair value of the awards. Employees gain a bigger bang for their buck if and when the share price rebounds. And that means the company must record an incremental compensation expense. Real-world practice can get complicated—for instance, a firm might exchange underwater options for new ones, or they might reduce the number of shares in the new option to offset the change in fair value. All that nuance shows up in the footnotes for you, the analyst, to read carefully.

Below is a simple diagram illustrating the high-level flow of a modification leading to an incremental expense:

```mermaid
flowchart LR
    A["Stock Option <br/>Granted"]
    B["Modification <br/>Change in Terms"]
    C["Increased <br/>Fair Value"]
    D["Incremental <br/>Compensation Expense"]

    A --> B
    B --> C
    C --> D
```

## IFRS vs. US GAAP: Subtle Differences

Sure, IFRS 2 (Share-based Payment) and FASB ASC 718 (Compensation—Stock Compensation) are fairly aligned, but let’s talk about a few big highlights that might come up in your exam or real-world practice:

• Forfeiture Estimates: IFRS 2 mandates that companies estimate forfeitures at the grant date and true them up over time, while US GAAP allows a policy choice to estimate or account for them as they occur.  
• Modification Timing: Both standards generally require the recognition of any incremental fair value at the date of the modification. Under IFRS, if the modification reduces the fair value, there’s usually no downward adjustment to reverse previously recognized compensation expense. US GAAP is similar in principle, treating downward modifications less straightforwardly than upward ones.  
• Disclosure Requirements: IFRS tends to emphasize principle-based disclosures, while US GAAP has more prescriptive guidance. In practice, both require a thorough discussion in the footnotes about the reasons for modifications, the methods used to value the revised awards, and how that translates into compensation expense.

## Footnote Disclosures: Why They Matter

Footnotes are your friend in analyzing modifications. Seriously. If a firm modifies a big chunk of its outstanding awards, you’ll almost certainly see a line or two in the “Share-Based Compensation” section of the notes describing:

• The nature of the modification (e.g., “exercise price changed from $50 to $40”).  
• The incremental fair value and how the company determined it.  
• Any updated vesting conditions (like new performance targets or extended service conditions).  
• The impact on the income statement, both in the current period and anticipated future periods.  

Keep an eye out for repeated modifications or repricing. Frequent changes could signal deeper management issues or strategy volatility. Some investors really hate recurring repricing, viewing it as “collateral damage” to shareholders, or as a sign that executives might profit even when the broader equity markets slump.

## Investor Perspectives and Governance Issues

From an investor’s standpoint, modifications and repricings can raise concerns, because they might be seen as moving the goalposts. If the company initially sets a performance condition that’s too lofty, it’s arguably beneficial for shareholders that the award remain out of the money if management underperforms. But if the board swoops in and modifies that performance condition or reprices the options to ensure management still benefits, investors can feel shortchanged.

Governance guidelines of major proxy advisory firms often caution companies against repeated repricing or modifications without a compelling rationale. So, if you’re analyzing a company with frequent modifications, ask: “Is this a once-in-a-lifetime meltdown that justifies a reset, or is this a pattern that might eventually hurt shareholders?”

## Impact on Diluted EPS and Other Metrics

Remember, share-based payments affect diluted EPS calculations in multiple ways. If an award that was once out of the money is suddenly brought closer to the money (or in the money), that may increase the number of shares in the diluted EPS denominator. Sometimes, you’ll even come across a scenario where a previously immaterial set of options becomes material after repricing. There could be restatements of prior period calculations if the effect is considered material and the standard calls for retrospective adjustments. The key takeaway is: keep track of the incremental shares that might creep into the denominator. 

## Example Scenario

Let’s do a quick run-through:
• A tech startup grants 1,000,000 options with an exercise price of $30 when the fair value is $7 each.  
• Two years later, we hit an economic slump, and the stock price falls to $20. Morale is low among the top brass. The firm decides to reprice the options to an exercise price of $22.  
• The fair value of the new award is now $9 each. The incremental fair value is $2 ($9 – $7). Multiplied by 1,000,000, that’s an additional $2,000,000 in compensation expense recognized over the remaining service period.  

Suddenly, the headlines read: “Company Recognizes Extra $2M in Compensation Expense.” But it might be spread over multiple years, depending on the new vesting table. Analysts need to check footnotes for that timing. Meanwhile, the old or new grants might be forfeited if the employees leave. That means the company may adjust the recognized expense downward in a catch-up entry if the forfeitures exceed expectations.

## Common Pitfalls and Best Practices

• Ignoring Forfeitures: Some students (and real-life accountants) forget that not every option will vest. Overestimating vesting leads to an overstatement of compensation expense.  
• Missing the Disclosure Details: A quick read might skip the nuance that the firm only repriced for certain employees. Or maybe the modification includes tough new performance metrics that offset some of the extra fair value.  
• Underestimating the Governance Aspect: These are not just numbers. Modifications and repricings can change the entire culture around performance incentives.  
• Understating Diluted EPS Effects: Even small changes in fair value can have a big knock-on effect on share counts if the modifications bring a large batch of options closer to the money.  

## Analytical Tips for Exam Day

• Always identify whether an award’s fair value goes up or down. If it goes up, expect incremental compensation expense.  
• Ask whether the modification lengthens or shortens the vesting period. This determines how quickly that incremental cost shows up on the income statement.  
• Look for references to “catch-up adjustments.” This typically signals that actual forfeitures deviate from the original assumption.  
• Check the footnotes for any mention of “performance condition changes.” If the condition is relaxed (e.g., lower EPS targets), that usually increases the likelihood of vesting and bumps compensation expense.  
• Be prepared to see exam questions that integrate multiple issues, like modifications crossing with a cross-currency factor (if it’s a multinational scenario) or merging with a consolidation question in an item set.  

## Additional References

• FASB ASC 718 (Compensation—Stock Compensation), especially sections on modifications and forfeitures:  
  https://asc.fasb.org/  
• IFRS 2 (Share-based Payment) regarding modifications and cancellations:  
  https://www.ifrs.org/  
• CFA Institute’s “Compensation Frameworks” reading (Level II curriculum).  
• “Executive Compensation Best Practices” by Fred Cook—great real-world perspective.

## Wrapping It All Up

Modifications, forfeitures, and repricing of executive compensation plans might sound arcane, but they can pack a punch in both the income statement and the eyes of investors. While IFRS and US GAAP share similar principles, subtle differences matter—especially in exam settings. Make sure you understand how incremental compensation expense is recognized, how forfeitures are handled, and the knock-on consequences for diluted EPS or corporate governance perceptions.

If there’s any personal note to share, I once encountered a CFO who repriced executive options twice in a single year. Investors weren’t thrilled, to say the least. The board faced tough questions about consistent performance thresholds, and the firm’s share price took a bit of a credibility hit. Lesson learned: frequent modifications can raise red flags. As you tackle your exam questions, keep a watchful eye for those footnote details—just like you would if you were analyzing real companies as an equity analyst or portfolio manager.

Focus on key steps:  
1. Identify the nature of the modification (or forfeiture, or repricing).  
2. Calculate or estimate any incremental fair value.  
3. Understand how that incremental cost flows to the financial statements.  
4. Watch for footnote disclosures that might reveal bigger governance or financial statement implications.  

Good luck on the exam, and may your analysis be thorough and your footnote reading swift!

---

## Practice Questions: Share-Based Payment Modifications and More

{{< quizdown >}}

### What typically happens when the fair value of a share-based award increases as a result of a modification?

- [ ] The company reverses previously recognized compensation expense.
- [x] The company recognizes incremental compensation expense for the increase in fair value.
- [ ] No accounting entries are required until the award is exercised.
- [ ] The fair value is ignored if the award has not yet vested.

> **Explanation:** When the modification increases the fair value of the award, the company must recognize an incremental compensation expense. This typically reflects the extra benefit granted to the employee relative to the original terms.


### Under IFRS 2 and US GAAP, how are forfeitures generally handled in accounting for share-based payments?

- [ ] They are not considered until the award vests.  
- [x] They are estimated at grant date and adjusted as necessary with a catch-up entry.  
- [ ] They are accounted for only when actual forfeitures occur, with no policy alternatives.  
- [ ] They must always be recognized as an immediate expense reversal.

> **Explanation:** Both IFRS and US GAAP require companies to estimate and adjust for forfeitures, though US GAAP allows a policy choice to estimate forfeitures or record them as they occur. In either case, a catch-up adjustment is recorded when actual forfeitures differ from estimates.


### Which of the following best describes “repricing” a stock option?

- [ ] Changing the vesting period to be shorter for executives.  
- [ ] Swapping standard options for performance-based awards.  
- [x] Lowering the existing strike price to maintain the option’s value for employees.  
- [ ] Eliminating the performance conditions on the option.

> **Explanation:** Repricing specifically refers to reducing the original exercise price, often to make the option more attractive if the current market price has dropped below the strike price.


### A company modifies an executive stock option grant, resulting in no increase to the fair value of the original award. Which statement is most accurate?

- [ ] Additional compensation expense must be recognized for the award’s entire fair value.  
- [ ] The company must reduce previously recognized expense to reflect the lowered fair value.  
- [ ] Disclosures are unnecessary if there’s no fair value change.  
- [x] No incremental compensation expense arises if fair value remains unchanged.

> **Explanation:** If the fair value is not increased by the modification, there’s no incremental compensation expense to record. However, the company may still need to disclose the modification's impact in the footnotes.


### An employer’s forfeiture estimate was initially 5% at grant date, but actual turnover exceeded 15%. Which of the following is correct?

- [ ] The company must amortize more expense due to the increased forfeiture.  
- [ ] No changes are required because forfeitures are immaterial.  
- [x] A downward adjustment in total compensation expense is recognized.  
- [ ] The fair value of the award is recalculated upward to compensate.

> **Explanation:** A higher forfeiture rate means fewer awards actually vest, reducing total compensation expense. A catch-up downward adjustment is generally recognized to reflect the difference between initial and actual forfeiture rates.


### If a firm frequently reprices its executive stock options, what might this signal to investors?

- [ ] That the firm has conservative accounting policies.  
- [ ] That the executives are consistently exceeding performance targets.  
- [x] Potential governance concerns and questionable incentive alignment.  
- [ ] Minimal impact, as repricing usually lowers the expense recognized.

> **Explanation:** Frequent repricing often spurs skepticism about the company’s governance practices. Investors worry that continually lowering strike prices dilutes the link between performance and reward.


### When modified awards become “in the money” after a repricing, which financial statement element is directly affected?

- [ ] Net cash from investing activities.  
- [ ] Unrecognized revenue.  
- [ ] Depreciation expense.  
- [x] Compensation expense.

> **Explanation:** A repricing that moves awards into the money generally increases compensation expense to reflect the greater fair value conferred to employees.


### How does IFRS typically handle a decrease in fair value from a modification?

- [ ] IFRS forces companies to record a negative compensation expense in the current period.  
- [ ] The company always cancels the originally recognized expense.  
- [x] The previously recognized compensation expense remains, and no downward adjustment is recognized.  
- [ ] All expense is reversed and recorded as a liability.

> **Explanation:** IFRS 2 disallows downward reversals of expense if the fair value decreases after a modification. The incremental basis generally applies only to upward adjustments in fair value.


### Which of the following disclosures most commonly appears in a company’s footnotes when it has repriced stock options?

- [ ] Names of all employees who received new awards.  
- [x] The incremental fair value and justification for the repricing.  
- [ ] Market risk disclosures required by IFRS 7.  
- [ ] Disclosure of unrecognized intangible assets from the updated awards.

> **Explanation:** Companies usually disclose the nature of the modification, including the incremental fair value calculation and reasons for repricing, in the footnotes.


### True or False: Adjusting previously recognized compensation expense for forfeitures is called a “catch-up” adjustment.

- [x] True  
- [ ] False  

> **Explanation:** When actual forfeiture rates differ from estimates, the company records a catch-up adjustment to reconcile previously recognized expense with updated assumptions.

{{< /quizdown >}}
