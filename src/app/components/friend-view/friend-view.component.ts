import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-friend-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

    console.log(this.friendRequests);
    console.log(this.sentFriendRequests);
  }

  public sendFriendRequest(username: string): void {
    this._apiService.postCall('api/friendships/ask', { username: username });
  }

  public acceptFriendRequest(pendingFriendshipId: string): void {
    this._apiService.postCall('api/friendships/accept', { pendingFriendshipId: pendingFriendshipId });
  }





}
