export type SecurityRuleContext = {
  path: string;
  operation: 'get' | 'list' | 'create' | 'update' | 'delete' | 'write';
  requestResourceData?: any;
};

export class FirestorePermissionError extends Error {
  public readonly context: SecurityRuleContext;
  public readonly name = 'FirestorePermissionError';
  
  constructor(context: SecurityRuleContext) {
    const message = `Firestore Permission Denied: Cannot ${context.operation} at ${context.path}.`;
    super(message);
    this.context = context;

    // This is to make the error visible in the Next.js development error overlay.
    // It should be removed or commented out in production.
    this.stack = JSON.stringify({
      message: this.message,
      context: this.context,
    }, null, 2);
  }

  toString() {
    return this.stack || super.toString();
  }
}
