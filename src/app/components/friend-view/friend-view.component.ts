import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-friend-view',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './friend-view.component.html',
  styleUrls: ['./friend-view.component.scss']
})
export class FriendViewComponent implements OnInit {

  constructor(
    private _apiService: ApiService,
  ) { }

  public friendRequests: any[] = [];
  public sentFriendRequests: any[] = [];
  public myFriends: any[] = [];



  public async ngOnInit(): Promise<void> {

    this.friendRequests = await this._apiService.getCall('api/friendships/requests');
    this.sentFriendRequests = await this._apiService.getCall('api/friendships/requests-sent');
    this.myFriends = await this._apiService.getCall('api/friendships/friends');

    console.log(this.friendRequests);
    console.log(this.sentFriendRequests);
  }

  public async sendFriendRequest(username: string): Promise<void> {
    try {
      await this._apiService.postCall('api/friendships/ask', { username: username });
      this.sentFriendRequests.push({ receiverUsername: username });
    } catch (error) {
      console.log(error);
    }
  }

  public acceptFriendRequest(pendingFriendshipId: string): void {
    this._apiService.postCall('api/friendships/accept', { pendingFriendshipId: pendingFriendshipId });
  }

  public onSelectTab(tab: string): void {
    console.log(tab);
  }
}
