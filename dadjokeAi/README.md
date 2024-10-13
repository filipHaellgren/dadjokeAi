1. Vad gör tjänsten?
Tjänsten är en Dad Joke Generator som låter användare skriva in text eller en "prompt" i ett textarea. När användaren skickar sin prompt, skickas den till OpenAI
API, som skapar ett skämt baserat på input. Resultatet, i form av ett skämt, visas sedan i ett textfält på webbplatsen.

2. Vilka är målgruppen?
Målgruppen för denna tjänst är alla som tycker om humor, särskilt de som gillar ordvitsar och pappaskämt. Tjänsten kan användas av personer i alla åldrar, men den är speciellt anpassad för dem som letar efter lättsam underhållning. Den kan också användas i sociala sammanhang där ett snabbt skämt kan bryta isen.

3. Avvägningar om etik och säker användning
Vid utvecklingen av tjänsten har följande etiska och säkerhetsmässiga överväganden gjorts:

Innehållsfiltering: OpenAI API används för att generera skämt, vilket innebär att vi förlitar oss på att modellen inte genererar olämpligt innehåll. Även om OpenAI har inbyggda säkerhetsåtgärder kan vissa skämt fortfarande vara opassande. Därför bör användarna vara medvetna om att även om det är sällsynt, kan vissa skämt vara känsliga.
Datahantering: Tjänsten samlar inte in personlig information från användarna. Input som skickas till OpenAI används enbart för att generera skämt och sparas inte efter användning.
Etik i AI: Tjänsten bygger på en AI-modell som tränats på en mängd textdata, och det finns alltid en risk för att modellen kan återspegla partiskheter eller generera innehåll som inte är lämpligt för alla målgrupper. Utvecklare bör överväga att lägga till ytterligare filter eller granskning av innehåll om tjänsten skalas upp.

4. Andra väsentliga avvägningar som gjorts vid utvecklingen
Prestanda: Tjänsten är optimerad för att fungera snabbt, även med begränsade systemresurser. Genom att använda Vite och React i frontend-ramverket säkerställs snabb utveckling och responsiva sidor.
API-användning: Ett viktigt beslut var att använda OpenAI
API för skämtgenerering. Det innebär dock beroende av externa tjänster, och om OpenAI
API upplever driftstörningar eller om användarens kvot överskrids, kan tjänsten tillfälligt sluta fungera.
Skalbarhet: Eftersom tjänsten bygger på OpenAI
API, kan den enkelt skalas upp genom att anpassa planerna hos OpenAI om användningen ökar. Tjänsten är också byggd med en modern stack, vilket gör den flexibel för framtida utveckling.