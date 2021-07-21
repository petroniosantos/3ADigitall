import { FormGroup } from '@angular/forms';

export function cadastroSenhaIguaisValidator(formGroup: FormGroup) {
    const username = formGroup.get('userName')?.value ?? '';
    const password = formGroup.get('password')?.value ?? '';

    if (username.trim() + password.trim()) {
        return username !== password ? null: { senhaIgualCadastro: true };
    } else {
        return null;
    }
}