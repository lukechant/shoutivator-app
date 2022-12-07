import { Component, OnInit } from '@angular/core';

interface RecommendedVoices {
	[key: string]: boolean;
}
@Component({
  selector: 'slogans-container',
  templateUrl: './slogans-container.component.html',
  styleUrls: ['./slogans-container.component.css'],
})
export class SlogansContainerComponent implements OnInit {
  sloganDisplayed: string | undefined;
  sayCommand: string | undefined;
	recommendedVoices: RecommendedVoices;
	selectedVoice: SpeechSynthesisVoice | null;
	text: string | undefined;
	voices: SpeechSynthesisVoice[];

  constructor() {
    //stolen code from https://www.bennadel.com/blog/3955-having-fun-with-the-speechsynthesis-api-in-angular-11-0-5.htm
    this.voices = [];
		this.selectedVoice = null;
		this.text = this.sloganDisplayed;
		this.sayCommand = "";

		this.recommendedVoices = Object.create( null );
		this.recommendedVoices[ "Alex" ] = true;
		this.recommendedVoices[ "Alva" ] = true;
		this.recommendedVoices[ "Damayanti" ] = true;
		this.recommendedVoices[ "Daniel" ] = true;
		this.recommendedVoices[ "Fiona" ] = true;
		this.recommendedVoices[ "Fred" ] = true;
		this.recommendedVoices[ "Karen" ] = true;
		this.recommendedVoices[ "Mei-Jia" ] = true;
		this.recommendedVoices[ "Melina" ] = true;
		this.recommendedVoices[ "Moira" ] = true;
		this.recommendedVoices[ "Rishi" ] = true;
		this.recommendedVoices[ "Samantha" ] = true;
		this.recommendedVoices[ "Tessa" ] = true;
		this.recommendedVoices[ "Veena" ] = true;
		this.recommendedVoices[ "Victoria" ] = true;
		this.recommendedVoices[ "Yuri" ] = true;


  }

  ngOnInit(): void {
    //stolen code
    this.voices = speechSynthesis.getVoices();
		this.selectedVoice = ( this.voices[ 0 ] || null );
		this.updateSayCommand();

		// The voices aren't immediately available (or so it seems). As such, if no
		// voices came back, let's assume they haven't loaded yet and we need to wait for
		// the "voiceschanged" event to fire before we can access them.
		if ( ! this.voices.length ) {

			speechSynthesis.addEventListener(
				"voiceschanged",
				() => {

					this.voices = speechSynthesis.getVoices();
					this.selectedVoice = ( this.voices[ 0 ] || null );
					this.updateSayCommand();

				}
			);

		}

  }

  refreshSlogan(slogan: string): string {
    return this.sloganDisplayed = slogan;
  }


  //stolen code
  public speak() : void {

		if ( ! this.selectedVoice || ! this.text ) {

			return;

		}

		this.stop();
		this.synthesizeSpeechFromText( this.selectedVoice, this.text );

	}


	// I stop any current speech synthesis.
	public stop() : void {

		if ( speechSynthesis.speaking ) {

			speechSynthesis.cancel();

		}

	}


	// I update the "say" command that can be used to generate the a sound file from the
	// current speech synthesis configuration.
	public updateSayCommand() : void {

		if ( ! this.selectedVoice || ! this.text ) {

			return;

		}

		// With the say command, the rate is the number of words-per-minute. As such, we
		// have to finagle the SpeechSynthesis rate into something roughly equivalent for
		// the terminal-based invocation.
		var sanitizedText = this.text
			.replace( /[\r\n]/g, " " )
			.replace( /(["'\\\\/])/g, "\\$1" )
		;

		this.sayCommand = `say --voice ${ this.selectedVoice.name } --output-file=demo.aiff "${ sanitizedText }"`;

	}

	// ---
	// PRIVATE METHODS.
	// ---

	// I perform the low-level speech synthesis for the given voice, rate, and text.
	private synthesizeSpeechFromText(
		voice: SpeechSynthesisVoice,
		text: string
		) : void {

		var utterance = new SpeechSynthesisUtterance( text );
		utterance.voice = this.selectedVoice;

		speechSynthesis.speak( utterance );

	}


}
