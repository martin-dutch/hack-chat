import { clsx, type ClassValue } from 'clsx'
import { customAlphabet } from 'nanoid'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const nanoid = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  7
) // 7-character random string

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)

  if (!res.ok) {
    const json = await res.json()
    if (json.error) {
      const error = new Error(json.error) as Error & {
        status: number
      }
      error.status = res.status
      throw error
    } else {
      throw new Error('An unexpected error occurred')
    }
  }

  return res.json()
}

export function formatDate(input: string | number | Date): string {
  const date = new Date(input)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}


export function getRandomNumberInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const USER_ID = '1'


export const STARTING_ARTICLES = [{
  title: "Scoop: Nikki Haley’s fundraising takes off while GOP tries to end her campaign",
  text: `Nikki Haley had an eye-popping month of fundraising in January, hauling in almost as much cash as the prior three months combined, Axios has learned.

  Why it matters: The Haley campaign has the money to keep her long-shot presidential bid alive, even as many leaders in her party have called for the GOP primary to come to an end.
  
  Haley raised $16.5 million in January, including $11.7 million from grassroots supporters, according to her campaign.
  The campaign also added 69,274 new donors last month.
  Zoom in: Haley brought in more than $5 million in online grassroots donations the week after New Hampshire. She saw a surge in support after Trump threatened to bar any Haley donor from "MAGA camp."
  
  "It was just a sort of gasoline on the fire," said Mark Harris, the lead strategist for the pro-Haley super PAC Stand for America.
  Haley has 10 fundraisers over the next two weeks in California, Florida, New York and Texas to continue to make her case to mega-donors who were key to her rise.
  The campaign's January fundraising reports are due Feb. 20.
  Zoom out: Haley's campaign raised more cash than it spent in 2023, while rival campaigns like Trump, Florida Gov. Ron DeSantis and Sen. Tim Scott (R-S.C.) all burned through more cash than they brought in.
  
  "The campaign was smart and was thrifty and was very diligent with how it used its resources," Haley campaign spokesperson Olivia Perez-Cubas told Axios.
  Haley brought in $17.3 million during the fourth quarter, her public FEC filing shows, more than double the $8.2 million she raised during the quarter before that.
  By the numbers: Haley had $14 million in cash on hand at the end of 2023.
  
  Sen. Bernie Sanders had $18.1 million in cash on hand during the same period of the 2020 campaign, while President Biden had $8.9 million.
  Sen. Ted Cruz (R) had $18.7 million on hand in the same period of the 2016 campaign.
  Trump's campaign ended 2023 with $33 million on hand, but his FEC filings show he spent millions of donor money on legal fees, with multiple criminal trials ahead of him.
  What to watch: The Stand for America super PAC spent more aggressively and ended 2023 with $3.5 million left in the bank.
  
  Harris said that it's focused on South Carolina ahead of the state's Feb. 24 primary.
  "We may end up advertising in the Super Tuesday states ... but we're following the campaign's lead and the best thing we can do for all those states is have a strong showing in South Carolina."
  The bottom line: "We're the insurgent outsider campaign, we're the underdog," Harris said. "That's right where Nikki likes to be."`,
  image: `https://images.axios.com/Kz_tZLkV2PDt1JoEvNJghwYeR8Q=/0x0:5282x2971/1920x1080/2024/02/01/1706816793605.jpg?w=1920`,
  resultsNikky: 32,
  resultsTrump: 68
},{
  title: "US presidential hopeful Nikki Haley uses SNL cameo to mock Trump",
  text: `Republican presidential candidate Haley made jibes about Trump’s age and mental competency on the TV show Saturday Night Live.

  United States Republican presidential candidate Nikki Haley made a surprise appearance on NBC’s Saturday Night Live and took a swipe at former President Donald Trump over his age, his mental fitness and his refusal to debate her.
  
  Haley appeared in a segment set in a fake CNN town hall meeting in Columbia, South Carolina, where a fake Trump – played by cast member James Austin Johnson – was being asked questions by an audience.
  
  The former South Carolina governor has been campaigning ahead of her home state’s Republican primary on February 24 as she attempts to close the polling gap with Trump. Last month, Trump secured a decisive victory in the New Hampshire primary, beating rival Haley by a substantial margin.
  
  In the sketch, Haley was introduced as “someone who describes herself as a concerned South Carolina voter” when called on to question the candidate.
  
  “My question is why won’t you debate Nikki Haley?” she asked.
  
  Trump, the frontrunner for the nomination, has avoided all debates so far in the campaign.
  
  “Oh my God, it’s her, the woman who was in charge of security on January 6. It’s Nancy Pelosi,” the actor playing Trump responded, referring to the day in 2021 when Trump supporters stormed the US Capitol.
  
  During a campaign speech in New Hampshire in January, Trump repeatedly seemed to confuse Haley, who was his ambassador to the United Nations, with Democratic former House speaker Nancy Pelosi.
  
  Trump has accused Pelosi of turning down security he says his administration offered, but a special House committee that investigated the siege found no evidence to support that claim.
  
  After the town hall moderators corrected the stand-in Trump, Haley asked, “Are you doing OK Donald? You might need a mental competency test.”
  
  The Trump actor responded to Haley: “You know what I did. I took the test and I aced it, OK? Perfect score. They said I’m 100 percent mental.”
  
  The former president has boasted in the past that he has “aced” cognitive tests.
  
  A later joke about the movie The Sixth Sense prompted the actor playing Trump to say: “I see dead people.”
  
  Haley replied: “That’s what voters will say if they see you and Joe [Biden] on the ballot.”
  
  She later posted on X: “Had a blast tonight on SNL! Know it was past Donald’s bedtime so looking forward to the stream of unhinged tweets in the a.m.”
  
  Haley has positioned herself as a younger, more capable alternative to Trump and the Democratic frontrunner, President Joe Biden, as well as the only anti-Trump Republican left in the race.
  
  However, as she seeks to mobilise support with the Republican party faithful she has maintained controversial and erroneous positions.
  
  On Sunday, she backtracked on a claim that states can secede from the US. The comments had centred on Texas, where anger has risen as Washington attempts to moderate the governor’s harsh actions on migrants.
  
  But if Trump wins in South Carolina, where Haley served two terms as governor, she will likely face mounting pressure to quit the race.
  
  The final question in the skit came from SNL host Ayo Edebiri, who questioned Haley, now referred to as ambassador, about the root cause of the US Civil War.
  
  The candidate, during a town hall in December in New Hampshire, was asked about the reason for the war, and she did not mention slavery in her response. She walked back her comments hours later.
  
  “I was just curious, what would you say was the main cause of the Civil War?” Edebiri asked. “Do you think it starts with an ‘S’ and ends with a ‘lavery’?”
  
  Haley replied: “Yep, I probably should have said that the first time.”`,
  image:  "https://www.aljazeera.com/wp-content/uploads/2024/02/AP24035596929506-1707072480.jpg?resize=770%2C513&quality=80",
  resultsNikky: 32,
  resultsTrump: 68
},{
  title: `Nikki Haley signals to Donald Trump that she’s in it for the long haul`,
  text: `Former South Carolina governor faces pressure test in her home state as GOP questions: Is the race over?

  I would like to be emailed about offers, events and updates from The Independent. Read our privacy notice
  Nikki Haley isn’t going anywhere.
  
  At least, that’s the message her campaign is trying to get across this week as February begins and the battle for her home state of South Carolina ramps up.
  
  Still trailing Donald Trump by a hefty margin in all national polling and most surveys of upcoming primary states, the former governor and UN ambassador is battling a perception that was born months before Iowa and New Hampshire voted: the idea that the race is over.
  
  That idea became reality for many Republicans, particularly in Washington, after Mr Trump’s twin victories in the first two states of 2024. But Ms Haley is holding on like a barnacle, clinging to an 11-point margin of defeat in New Hampshire and her belief that she can close that gap even further in a state where she was governor for eight years.
  
  As New Hampshire’s results came in last month, the Haley campaign insisted that their candidate would remain in the race through March. South Carolina, her advisers argued, presented a good opportunity for a resurgence against Mr Trump. Super Tuesday, they went on to insist, also represented favourable territory thanks to the ability of independent voters to participate in some state contests. Those independents broke heavily for Ms Haley in New Hampshire, and may represent her best shot at building a support base to rival Mr Trump’s.
  
  It remains to be seen whether any of that will come to pass. But this week, the Haley campaign has begun showing some signs which indicate that her promise to remain in the race through the next month or two may be more than bluster.
  
  On Sunday, a Haley campaign press advisory announced her first campaign stop in one of the Super Tuesday states — California. She’ll host a rally in Los Angeles this Tuesday as Ms Haley presses Donald Trump on attending a debate, and sharpens her attacks around the issue of his skyrocketing legal fees (which he is paying with campaign donations). A Monday morning memo from campaign manager Betsy Ankey noted those plans, while reminding reporters that “11 of the 16 Super Tuesday states have open or semi-open primaries.”
  
  Ms Ankey also noted in her memo that the Haley campaign had just notched its best fundraising month yet — hardly surprising, given that she is now the last Trump-alternative standing — but still a sign that donors are not being scared away by the former president winning more than 50 per cent of the vote in the first contest.
  
  The memo also signalled a clear shift in messaging around the issue of Mr Trump’s legal fees. While Republicans (including Ms Haley) have shied away from making the case that the frontrunner is unfit for office or unelectable due to the alleged actions leading to his four criminal prosecutions, Ms Haley has in recent days deployed a stronger tone of criticism around the massive financial drain her ex-boss’s legal issues represent.
  
  In a Saturday Night Live appearance over the weekend, Ms Haley had a chance to show her comedic timing (and willingness to take a joke) as she starred in the show’s cold open and mocked her opponent for spending $50m to fund his various legal defences. Snidely, she asked Trump-impersonator James Austin Johnson if he’d like to borrow some cash.
  
  Her campaign manager on Monday drove that point home: Mr Trump, argued Ms Ankey, represents not just a dampening effect for Republicans down the ballot but also an inescapable money pit where donations pour in but never seem to make their way to GOP causes.
  
  “Anyone who has seen a shred of credible data, who has been paying attention for the last eight years, or frankly has two eyes in their head knows that Nikki is the stronger general election candidate,” she wrote. “[W]hile Trump is spending $50 million on personal legal fees, [President Joe] Biden just booked five times that amount – $250 million – on air…The only way Republicans will get back to winning is if Nikki Haley is the nominee.”
  
  Two and a half weeks away, South Carolina’s primary represents not only Nikki Haley’s best opportunity but also her greatest potential pitfall. An open primary state, it will be the second arena where she will theoretically be able to bolster her support within the GOP base by adding independent voters to the coalition. At the same time, however, the state does not have the same kind of tradition of independence from the two parties as New Hampshire does; just around 10.4 per cent of South Carolina’s electorate is unaffiliated with a major party, compared to closer to 40 per cent in New Hampshire.
  
  If Ms Haley wants to remain a competitive candidate on Super Tuesday, she needs a convincing showing of some kind in South Carolina. And it’s clear that doing so will require Ms Haley to gain greater traction among Republican voters than she has so far.
  
  The one time governor believes that making the case to voters that Mr Trump is a loser, legally and politically speaking, will bridge that gap. But she has only two weeks to do it, and will first have to overcome one, very difficult counterpoint: he may have already won.
  
  `,
  image: "https://cdn.cnn.com/cnnnext/dam/assets/160113122919-nikki-haley-donald-trump-composite-super-tease.jpg",
  resultsNikky: 32,
  resultsTrump: 68
},{
  title: "Nikki Haley: Trump spends more time ‘ranting’ than fighting for American people",
  text: `Republican candidate attacks Trump for being more concerned with himself than with country ahead of South Carolina primary

  Nikki Haley pressed her case on Sunday to become the Republican presidential nominee by launching a sharp attack on her rival Donald Trump as a candidate who is set to spend more time in court than on the campaign trail this year and is intent on ranting about his own supposed victimhood rather than fighting for the American people.
  
  With less than three weeks to go before the Republican primary in her home state of South Carolina, which many observers see as the former governor and UN ambassador’s last stand, Haley attacked Trump for being more concerned with himself than with the future of the country. She told CNN’s State of the Union Sunday morning TV show that his multiple court cases, in which he faces 91 charges across four criminal cases, amounted to a “real issue”.
  
  Turning Trump’s own words against him, Haley said that the former president was “going to be spending more time in a courtroom than he’s going to be spending on the campaign trail”. At a time when the US is “in disarray and the world is on fire, we need a president that’s going to give us eight years of focus and discipline, not one that’s going to be sitting there ranting about how he’s a victim.”.
  
  She added that Trump, in recent days, “hasn’t once talked about the American people. And that’s a problem.”
  
  She went on to accuse him of having a “temper tantrum” after she garnered 43% of the vote in New Hampshire last month. “Why? Because he wasn’t controlling the situation.”
  
  Haley’s caustic attack on Trump came as he continues to command a seemingly unassailable lead in the Republican nomination contest. He comfortably won elections in Iowa and New Hampshire, and is now showing a double digit lead in opinion polls in South Carolina, where the Republican primary contest is on 24 February.
  
  In the latest Washington Post-Monmouth University poll of potential Republican primary voters in South Carolina, Trump was 26 points ahead on 58% to Haley’s 32%.
  
  As part of her increasingly direct assault on the standing and reputation of Trump, Haley has also taken to comparing him to Joe Biden. She pointedly predicted that if Trump became the Republican nominee, there would be a woman in the White House.
  
  In that circumstance, “Joe Biden will win and Kamala Harris will become president,” she said.
  
  She said that America deserved better than either Trump or Biden as leader. “Why are we doing this? We are allowing ourselves to have two 80-year-olds, who can’t serve eight years, who are both diminished whether it’s in their character or in their mental capacity.”
  
  For his part, Biden surprised no one by taking more than 95% of the primary vote in South Carolina on Saturday. His two competitors, Dean Phillips, a congressman from Minnesota, and the self-help author Marianne Williamson, lagged far behind.
  
  South Carolina has been promoted by the Democratic party as its first official primary election, partly out of recognition that it was the state in which African American voters gifted Biden a huge win in 2020 that lifted him to the Democratic nomination. Jim Clyburn, the Democratic congressman from South Carolina who was seminal in turning that vote to Biden, was asked by CNN whether the president was retaining the support of Black voters in this election cycle.
  
  “Joe Biden has not lost any support among African Americans. You can go out and talk to 10 people, purposely find one who maybe gives off a different thought, but he has not lost any support among African Americans,” Clyburn said.
  
  Congressman Hakeem Jeffries of New York, the Democratic party leader in the House of Representatives, hinted at better things to come for Biden as he struggles to best Trump in many opinion polls.
  
  “It was a tremendous victory in South Carolina, a decisive one and I think it demonstrates that as we enter into the campaign season that the American people are beginning to focus on President Biden’s incredible track record of results,” he said.
  
  Jeffries cited economic and health measures executed by the Biden administration as the US worked its way out from the Covid-19 pandemic, “allowing the American economy to emerge as the most advanced in the world”.
  
  He added: “Yes, more needs to be done in addressing affordability and the inflationary pressures and President Biden has a vision to do that.”
  
  Biden was scheduled to travel to Las Vegas on Sunday for a campaign event in the Historic Westside neighborhood ahead of Nevada’s Democratic primary on Tuesday.
  
  Nevada is a key swing state for Biden to win again this year. He beat Trump by less than three points there in 2020, relying heavily on support from Hispanic and working-class union member voters in the Las Vegas area.
  
  Biden needs a good showing in the Democratic primary, while the nominating race for the Republicans in Nevada is a confusing and messy one with two contests two days apart and Trump having a clear advantage over Haley.
  
  Meanwhile, Haley made a cameo appearance on the US comedy staple Saturday Night Live.`,
  image:  "https://i.guim.co.uk/img/media/91f2d1dde7831e751b78096ab317bc7390078695/0_396_5938_3563/master/5938.jpg?width=620&dpr=2&s=none",
  resultsNikky: 32,
  resultsTrump: 68
},{
  title: "Trump wasn't on the ballot, but Haley loses Nevada's Republican presidential primary",
  text: `NBC News projects Haley has lost the GOP primary, even though Trump wasn't on the ballot In another blow to Nikki Haley's campaign, NBC News projects that she has lost Nevada's Republican primary. Instead, more voters chose the "none of these candidates" option.

  Nikki Haley is supposed to win the Nevada presidential Republican primary tonight — and earn precisely zero delegates. I’m not clairvoyant — Donald Trump isn’t listed on the primary ballot. Instead, he’s competing in the GOP caucuses on Thursday, the contest that will determine all 26 Nevada delegates, and that will not include Haley.
  
  Come caucus night, don’t be surprised if she rains on Trump’s parade by pointing to overall turnout numbers.
  
  Yet, it looks like Haley could end up having a good night anyway, and she only has Trump and his campaign advisers to thank. Firstly, she will technically get a win, albeit a hollow one without any delegates. But come caucus night, don’t be surprised if she rains on Trump’s parade by pointing to overall turnout numbers.
  
  Confused? You can thank the Nevada GOP.
  
  In a nutshell, Nevada changed its election law in 2021 to require both the Democratic and Republican parties to replace their traditional caucuses with state-run primaries if more than two presidential candidates are on the ballot. But Nevada’s state GOP opted to caucus anyway — and use that contest to allocate the party’s delegates. Republican candidates had to choose one or the other, with Trump picking the caucuses and Haley picking the primary. (Although Republican voters can hypothetically vote in both.)
  
  This cockamamie idea was cooked up by Nevada’s state GOP chair, Michael McDonald, an avid Trump follower who was indicted on felony charges last December for being a fake 2020 elector. The theory is that caucuses tend to attract more of the GOP’s MAGA superfans, giving Trump the edge.
  
  But it turns out preparing for a statewide caucus can be complicated. Axios reported over the weekend that Team Trump voiced concerns about the party’s bandwidth and organization (apparently, the Nevada GOP only has one full-time staffer). The state’s presidential primaries, meanwhile, are run and promoted by the secretary of state. This means a lot more manpower and planning. They also allow early voting and mail-in ballots; as of Saturday nearly 60,000 early primary votes had already been cast in the Republican primary.
  
  This is a problem for the Trump campaign. A large primary turnout could be spun by Haley as a “win” of sorts, and a sign of flagging Trump enthusiasm. Team Trump seems to be trying to hedge its bets with typical Trumpian misinformation. Chris LaCivita, a Trump campaign senior adviser, reportedly claimed that a state voting guide amounted to “election interference” by the secretary of state’s office. 
  
  Team Trump is clearly already trying to hedge its bets with typical Trumpian misinformation.
  
  And remember, 26 delegates is a relatively small number. The GOP nominee must win 1,215 delegates to emerge victorious this summer and challenge President Joe Biden in the November general election. Currently Trump leads Haley 33-17. That means it’s possible Team Trump has brazenly gamed the system for a handful of delegates — and a losing story on Friday morning.
  
  If Haley ends up winning more total votes than Trump, she will absolutely claim bragging rights, delegates be damned. Most people, especially outside of Nevada, will not have a clue about the convoluted process, which could help her to gain at least some momentum heading into a very tough South Carolina primary on Feb. 24. It could also help with her donors, especially if Trump takes the bait, gets defensive and flustered and ends up with another “confusing” campaign speech moment like he did in New Hampshire.
  
  Then again, Trump may have more on his mind than Nevada. Thursday is also when the Supreme Court will hear oral arguments in his ballot access case.`,
  image: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/01/1440/810/Donald-Trump-Las-Vegas-Jan.-27-2024.jpg?ve=1&tl=1",
  resultsNikky: 32,
  resultsTrump: 68
},{
  title: "Republican Men Always Bail on Competent Women. Nikki Haley is just the latest example.",
  text: `CNN co-host Dana Bash pressed GOP presidential candidate Nikki Haley on whether former President Trump’s reported interactions with writer E. Jean Carroll’s attorney show he has issues with women.

  “You alluded to one of the cases and this is a civil trial, dealing with E. Jean Carroll and the attorney who represented her, Roberta Kaplan. She said this week that Donald Trump was so angry during a deposition that his team was providing her lunch that he threw papers across the table and stormed off. He also made a veiled reference to the c-word,” Bash said on CNN’s “State of the Union.”
  
  “You’re now his competitor, but you’ve worked very closely with him, as you’ve talked about even in this in this interview. Do you think he has a problem with women who challenge him?” Bash asked.
  
  Haley, the former United Nations ambassador, sidestepped the question, saying that Trump was “respectful” to her when she challenged him while working together.
  
  “Well, I challenged him a lot and he actually handled it very well and was very respectful. If I saw him doing something wrong, I showed up or I called him and I would say, ‘You cannot do this, but instead, you know, do it this way, this way or this way,'” Haley responded.
  
  “And so he, he knew that I knew what I was talking about and that I was looking out for the best interest of America and so he didn’t challenge me. I think that there are issues obviously you see the things that he says. He is not a perfect person. He is flawed,” she said.
  
  Bash was referring to Carroll attorney Roberta Kaplan’s comments earlier this week when she said Trump stormed out out of a deposition at Mar-a-Lago because his team offered to feed her lunch. She also said Trump used an euphemism to call her the c-word.
  
  “At which point there was a huge pile of documents, exhibits, sitting in front of him, and he took the pile and he just threw it across the table. And stormed out of the room,” Kaplan told podcast hosts George Conway and Sarah Longwell in an interview last week.`,
  image:  "https://images.wsj.net/im-918291/?width=700&size=1.5&pixel_ratio=2",
  resultsNikky: 32,
  resultsTrump: 68
},{
  title: "Nikki Haley won't be able to spin a 'win' out of Nevada's GOP nomination fiasco",
  text: `In another blow to Nikki Haley's campaign, NBC News projects that she has lost Nevada's Republican primary. Instead, more voters chose the "none of these candidates" option.

  Nikki Haley is supposed to win the Nevada presidential Republican primary tonight — and earn precisely zero delegates. I’m not clairvoyant — Donald Trump isn’t listed on the primary ballot. Instead, he’s competing in the GOP caucuses on Thursday, the contest that will determine all 26 Nevada delegates, and that will not include Haley.
  
  Come caucus night, don’t be surprised if she rains on Trump’s parade by pointing to overall turnout numbers.
  
  Yet, it looks like Haley could end up having a good night anyway, and she only has Trump and his campaign advisers to thank. Firstly, she will technically get a win, albeit a hollow one without any delegates. But come caucus night, don’t be surprised if she rains on Trump’s parade by pointing to overall turnout numbers.
  
  Confused? You can thank the Nevada GOP.
  
  In a nutshell, Nevada changed its election law in 2021 to require both the Democratic and Republican parties to replace their traditional caucuses with state-run primaries if more than two presidential candidates are on the ballot. But Nevada’s state GOP opted to caucus anyway — and use that contest to allocate the party’s delegates. Republican candidates had to choose one or the other, with Trump picking the caucuses and Haley picking the primary. (Although Republican voters can hypothetically vote in both.)
  
  
  What happens in Vegas? Trump-Haley to square off in ‘weird’ Nevada election 

  This cockamamie idea was cooked up by Nevada’s state GOP chair, Michael McDonald, an avid Trump follower who was indicted on felony charges last December for being a fake 2020 elector. The theory is that caucuses tend to attract more of the GOP’s MAGA superfans, giving Trump the edge.
  
  But it turns out preparing for a statewide caucus can be complicated. Axios reported over the weekend that Team Trump voiced concerns about the party’s bandwidth and organization (apparently, the Nevada GOP only has one full-time staffer). The state’s presidential primaries, meanwhile, are run and promoted by the secretary of state. This means a lot more manpower and planning. They also allow early voting and mail-in ballots; as of Saturday nearly 60,000 early primary votes had already been cast in the Republican primary.
  
  This is a problem for the Trump campaign. A large primary turnout could be spun by Haley as a “win” of sorts, and a sign of flagging Trump enthusiasm. Team Trump seems to be trying to hedge its bets with typical Trumpian misinformation. Chris LaCivita, a Trump campaign senior adviser, reportedly claimed that a state voting guide amounted to “election interference” by the secretary of state’s office. 
  
  Team Trump is clearly already trying to hedge its bets with typical Trumpian misinformation.
  
  And remember, 26 delegates is a relatively small number. The GOP nominee must win 1,215 delegates to emerge victorious this summer and challenge President Joe Biden in the November general election. Currently Trump leads Haley 33-17. That means it’s possible Team Trump has brazenly gamed the system for a handful of delegates — and a losing story on Friday morning.`,
  image:  "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2024-02/240206-donald-trump-nikki-haley-msnbc-mn-1300-d2d6c2.jpg",
  resultsNikky: 32,
  resultsTrump: 68
},{
  title: "Dana Bash presses Haley on whether Trump ‘has a problem with women who challenge him’",
  text: `CNN co-host Dana Bash pressed GOP presidential candidate Nikki Haley on whether former President Trump’s reported interactions with writer E. Jean Carroll’s attorney show he has issues with women.

  “You alluded to one of the cases and this is a civil trial, dealing with E. Jean Carroll and the attorney who represented her, Roberta Kaplan. She said this week that Donald Trump was so angry during a deposition that his team was providing her lunch that he threw papers across the table and stormed off. He also made a veiled reference to the c-word,” Bash said on CNN’s “State of the Union.”
  
  “You’re now his competitor, but you’ve worked very closely with him, as you’ve talked about even in this in this interview. Do you think he has a problem with women who challenge him?” Bash asked.
  
  Haley, the former United Nations ambassador, sidestepped the question, saying that Trump was “respectful” to her when she challenged him while working together.
  
  “Well, I challenged him a lot and he actually handled it very well and was very respectful. If I saw him doing something wrong, I showed up or I called him and I would say, ‘You cannot do this, but instead, you know, do it this way, this way or this way,'” Haley responded.
  
  “And so he, he knew that I knew what I was talking about and that I was looking out for the best interest of America and so he didn’t challenge me. I think that there are issues obviously you see the things that he says. He is not a perfect person. He is flawed,” she said.
  
  Bash was referring to Carroll attorney Roberta Kaplan’s comments earlier this week when she said Trump stormed out out of a deposition at Mar-a-Lago because his team offered to feed her lunch. She also said Trump used an euphemism to call her the c-word.
  
  “At which point there was a huge pile of documents, exhibits, sitting in front of him, and he took the pile and he just threw it across the table. And stormed out of the room,” Kaplan told podcast hosts George Conway and Sarah Longwell in an interview last week.`,
  image: "https://thehill.com/wp-content/uploads/sites/2/2024/01/Politics-Haley_011124_AP_Andrew-Harnik.jpg?w=1280&h=720&crop=1"
  ,
  resultsNikky: 32,
  resultsTrump: 68},{
    title: "Nikki Hayley should have enough money to campaign beyond South Carolina, no matter the outcome",
    text: `Nikki Haley is continuing to fundraise across the country, despite recent losses to former President Trump in Iowa and New Hampshire.

    Why it matters: She should have enough money to campaign beyond South Carolina, no matter the outcome.
    
    What we're watching: Haley has more than 10 fundraisers scheduled in the next two weeks — including in California, Florida, New York, and Texas —Axios has learned.
    
    The intrigue: Tomorrow night she'll be in New York City for an event whose hosts include Ken Langone, the Home Depot co-founder who previously said he was waiting for Haley's New Hampshire results because he "did not want to throw money down a rat hole."
    
    Other members of the event's host committee include private equity titan Henry Kravis and hedge fund manager Cliff Asness, according to a copy of the invitation obtained by Axios.
    The big picture: Haley has raised $4 million in online grassroots donations since New Hampshire, including $1 million in the 24 hours after Donald Trump threatened her donors with being "permanently barred" from Trump world if they continued to support Haley.
    
    The Haley-aligned PAC SFA Inc. recently announced an eye-popping $50 million in the second half of 2023.
    Details of some of Haley's fundraisers were previously reported by the WSJ and Puck.
    
    What they're saying: "Nikki is the last one standing between the rematch no one wants in Trump and Biden," Haley campaign spokesperson Olivia Perez Cubas tells Axios.
    
    "70% of Americans want a different choice and that's exactly what we're giving them."`,
    image: "https://images.axios.com/qL4IOe-n_PZ4yY6qr96xDr6JY-Q=/0x267:5743x3497/1920x1080/2024/01/29/1706494697011.jpg?w=1920",
    resultsNikky: 32,
    resultsTrump: 68
  },{
    title: 'Trump to Newsmax: Haley Supported by Democrats',
    text: `Nikki Haley is being supported by Democrats, former President Donald Trump told Newsmax on Monday.

    Haley, the only remaining candidate challenging Trump for the Republican presidential nomination, is backed by Democrats in New Hamshire and Iowa, which have already held contests in the race.
    
    "In Iowa, I had the biggest election victory in history and in New Hamshire, I had the most votes in the history of the New Hamphsire primary. Haley got trounced," Trump said. "She walked on to the stage and said this was a wonderful night. It wasn't a wonderful night for her, it was a wonderful night for me."
    
    Trump emphasized that "we are beating her very badly," including in her own state of South Caroilina, where she was governor.
    
    Trump said that he has almost all Republicans endorsing him in South Carolina, including both senators.
    `,
    image: 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fd741bc20-4390-4ce8-afec-d653dc5f02f2.jpg?crop=1600%2C900%2C0%2C0&resize=1500',
    resultsNikky: 32,
    resultsTrump: 68
  }]
