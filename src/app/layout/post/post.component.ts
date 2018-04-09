import {Component, OnInit, ViewChild} from '@angular/core';
import {ConspectService} from '../../shared/services/conspect.service';
import {Conspect} from '../../shared/models/conspect.model';
import {ActivatedRoute, Router} from '@angular/router';
import {RatingService} from '../../shared/services/rating.service';
import {Rating} from '../../shared/models/rating.model';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, Validators} from '@angular/forms';
import {TdTextEditorComponent} from '@covalent/text-editor';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @ViewChild('textEditor') private _textEditor: TdTextEditorComponent;

  conspect: Conspect = new Conspect();
  rating: Rating = new Rating();

  ctrl = new FormControl(null, Validators.required);

  options: any = {
    toolbar: false,
  };

  constructor(private config: NgbRatingConfig,
              private route: ActivatedRoute,
              private conspectService: ConspectService,
              private ratingService: RatingService,
              private router: Router) {
    config.max = 5;
  }

  ngOnInit() {
    this.conspectService.getConspect(this.route.snapshot.params['id'])
      .subscribe( data => {
        this.conspect = data;
        this.getRating();
        this._textEditor.value = this.conspect.mainText;
        this._textEditor.togglePreview();
      });
  }

  getRating() {
    this.ratingService.getRating(this.conspect.id)
      .subscribe(data => {
        this.rating = JSON.parse(data);
        console.log(this.rating);
      });
  }

  setRating() {
    if (this.conspect.id !== undefined) {
    this.ratingService.setRating(this.conspect.id, this.rating).subscribe();
    }
  }

  onClick(tag: string) {
    this.router.navigate(['/tag/', tag]);
  }

}
