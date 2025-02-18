import { Ledger } from "./types"

export class Node<V> {
  protected id: string
  protected ledger: Ledger<V> = {}
  // todo
  protected communication: unknown
  protected state: unknown

  constructor (id: string) {
    this.id = id
  }
}
