import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';

@Injectable({
  providedIn: 'root',
})
export class PouchDBService {
  private db: PouchDB.Database;

  constructor() {
    this.db = new PouchDB('my_database1');
  }

  async addUser(user: any): Promise<any> {
    return await this.db.put(user);
  }

  async getUser(id: string): Promise<any> {
    return await this.db.get(id);
  }

  async updateUser(user: any): Promise<any> {
    try {
      const existingUser = await this.getUser(user._id);
      user._rev = existingUser._rev;
      return await this.db.put(user);
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }

  async deleteUser(id: string): Promise<any> {
    const user = await this.getUser(id);
    return await this.db.remove(user);
  }

  async getAllUsers(): Promise<any> {
    return await this.db.allDocs({ include_docs: true });
  }
}
