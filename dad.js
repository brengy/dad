document.addEventListener('DOMContentLoaded', function() {
    const Atext = `
محمد ابوالوفا – مرفت صالح
 

لقد كنتما دائمًا النموذج المثالي للتربية الجيدة والحب غير المشروط. منذ طفولتي

 تعلمت منكما القيم والأخلاق التي شكلت شخصيتي
بل كنتما المرشدين والموجهين في حياتي

بكل حب وصبر، علمتماني أهمية الصدق والعمل الجاد والاحترام,
 أستطيع اللجوء إليكما في كل وقت وأي مكان

دعمكما لم يكن مقتصرًا على الأوقات السهلة، بل كنتم دائمًا موجودين لتقديم النصيحة والإرشاد حتى في أصعب اللحظات

 علّمتماني كيف أواجه التحديات وأتغلب على الصعاب بإيمان وثقة

هذا اعتراف مني بما قدمتموه لي من حب ورعاية وتربية صالحة.
 لن أنسى أبدًا ما تعلمته منكما

محمود محمد أبوالوفا
    `.trim().split('\n');

    let lineIndex = 0;
    let charIndex = 0;
    const speed = 50; // Adjust typing speed here (lower is faster)

    // Create and configure the audio element
    const audio = new Audio('typing.mp3'); // Replace with the path to your audio file
    audio.volume = 1; // Adjust volume if needed

    function AtypeWriter() {
        if (lineIndex < Atext.length) {
            if (charIndex < Atext[lineIndex].length) {
                document.getElementById('typingEffect').innerHTML += Atext[lineIndex].charAt(charIndex);
                charIndex++;
               audio.play(); 
              
                setTimeout(AtypeWriter, speed);
            } else {
                document.getElementById('typingEffect').innerHTML += '<br>';
                lineIndex++;
                charIndex = 0;
				  audio.play(); // Play the audio
                setTimeout(AtypeWriter, speed);
            }
        }
    }

 const Etext = `
      Mohammad Abulwafa – Mervat Saleh




You have always been the perfect model of good upbringing and unconditional love.
Since my childhood, I have learned from you the values and ethics that have shaped my character.
You have been my guides and mentors in life.

With love and patience, you taught me the importance of honesty, hard work, and respect.
I can turn to you at any time and place.

Your support was not limited to easy times; 
you were always there to offer advice and guidance even in the toughest moments.
You taught me how to face challenges and overcome difficulties with faith and confidence.


This is my acknowledgment of the love, care, and good upbringing you have given me.
I will never forget what I have learned from you, and I will remain forever grateful.



Mahmoud Abulwafa
	 
	  
    `.trim().split('\n');

function EtypeWriter() {
        if (lineIndex < Etext.length) {
            if (charIndex < Etext[lineIndex].length) {
                document.getElementById('typingEffect').innerHTML += Etext[lineIndex].charAt(charIndex);
                charIndex++;
               audio.play(); 
              
                setTimeout(EtypeWriter, speed);
            } else {
                document.getElementById('typingEffect').innerHTML += '<br>';
                lineIndex++;
                charIndex = 0;
				  audio.play(); // Play the audio
                setTimeout(EtypeWriter, speed);
            }
        }
    }
	
    document.getElementById('AstartButton').addEventListener('click', function() {
        // Hide the button after clicking
        this.style.display = 'none';
		document.getElementById('EstartButton').style.display = 'none';
        AtypeWriter();
    });
	
	 document.getElementById('EstartButton').addEventListener('click', function() {
        // Hide the button after clicking
        this.style.display = 'none';
		document.getElementById('AstartButton').style.display = 'none';
        EtypeWriter();
    });

	
});
