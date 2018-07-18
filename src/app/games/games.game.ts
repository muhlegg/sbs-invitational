export class Game {
  constructor(
    public id: string,
    public time: string,
    public homeTeam: string,
    public awayTeam: string,
    public homeScore: number,
    public awayScore: number,
    public status: string
  ) {
  }

  /**
   * Get game result in betting format
   * @returns {string}
   */
  get1X2(): string {
    if (!this.isPlayed()) {
      return 'NOTPLAYED';
    }

    if (this.homeScore > this.awayScore) {
      return '1';
    }

    if (this.homeScore < this.awayScore) {
      return '2';
    }

    return 'X';
  }

  /**
   * Check if game is not yet played
   * @returns {boolean}
   */
  isNotYetPlayed(): boolean {
    return (this.status === 'Not started');
  }

  /**
   * Check if game is live right now
   * @returns {boolean}
   */
  isLive(): boolean {
    return (this.status === 'Live');
  }

  /**
   * Check if game is played already
   * @returns {boolean}
   */
  isPlayed(): boolean {
    return (this.status === 'Finished');
  }
}
