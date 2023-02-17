export default class ErrorCreator extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
  }
} 