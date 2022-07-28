export default class Note {
	public readonly _id?: string;
	public name: string;
	public content?: string;

	constructor(props: Omit<Note, '_id'>, id?: string) {
		this.name = props.name;
		this.content = props.content || undefined;

		this._id = id || undefined;
	}
}
